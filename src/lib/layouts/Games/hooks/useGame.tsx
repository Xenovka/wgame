import { useEffect, useRef } from "react";

import { getListOfGames } from "../../../services/GameService";
import { Games } from "../../../types/Games";
import { useGameStore } from "../../../store/GameStore";

const useGame = () => {
    const { listOfGames, updateListOfGames } = useGameStore((state) => state);

    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (listOfGames) return;

        const fetchListOfGames = async () => {
            const games: Games = await getListOfGames();
            updateListOfGames(games.results);
        };

        fetchListOfGames();

        return () => {};
    });

    useEffect(() => {
        const fetchNextListOfGames = async () => {
            const games: Games = await getListOfGames();
            const fetchNextListOfGames = await fetch(games.next);
            const nextListOfGames = await fetchNextListOfGames.json();
            updateListOfGames([...listOfGames!, ...nextListOfGames.results]);
        };

        const observer = new IntersectionObserver(
            async (entries) => {
                const lastCard = entries[0];
                if (lastCard.isIntersecting) {
                    fetchNextListOfGames();
                    observer.unobserve(lastCard.target);
                    console.log("Intersecting");
                }
            },
            {
                threshold: 1
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, [cardRef.current]);

    return { cardRef, listOfGames };
};

export default useGame;
