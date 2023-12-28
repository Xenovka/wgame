import { useEffect, useRef } from "react";

import { getListOfGames } from "../../../services/GameService";
import { Games } from "../../../types/Games";
import { useGameStore } from "../../../store/GameStore";

const useGame = () => {
    const { listOfGames, updateListOfGames, nextListOfGamesURL, updateNextListOfGamesURL } = useGameStore(
        (state) => state
    );

    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (listOfGames) return;

        fetchListOfGames();

        return () => {};
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            async (entries) => {
                const lastCard = entries[0];
                if (lastCard.isIntersecting) {
                    console.log(nextListOfGamesURL);
                    fetchNextListOfGames();
                    observer.unobserve(lastCard.target);
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
            observer.disconnect();
        };
    }, [cardRef, listOfGames, updateListOfGames]);

    const fetchListOfGames = async () => {
        const games: Games = await getListOfGames();
        updateListOfGames(games.results);
        updateNextListOfGamesURL(games.next);
    };

    const fetchNextListOfGames = async () => {
        const fetchNextListOfGames =
            nextListOfGamesURL !== "" ? await fetch(nextListOfGamesURL) : await getListOfGames();
        const nextList: Games = await fetchNextListOfGames.json();
        updateListOfGames([...listOfGames!, ...nextList.results]);
        updateNextListOfGamesURL(nextList.next);
    };

    return { cardRef, listOfGames };
};

export default useGame;
