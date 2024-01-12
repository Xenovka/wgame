import { useEffect, useRef } from "react";

import { getListOfGames } from "../../../services/GameService";
import { useGameStore } from "../../../store/GameStore";
import { IGames } from "../../../types/Games";

const useGame = () => {
    const { listOfGames, isGamesLoading, updateListOfGames, nextListOfGamesURL, updateNextListOfGamesURL } =
        useGameStore((state) => state);

    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            async (entries) => {
                const lastCard = entries[0];
                if (lastCard.isIntersecting) {
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardRef, listOfGames, updateListOfGames]);

    const fetchNextListOfGames = async () => {
        const fetchNextListOfGames =
            nextListOfGamesURL !== "" ? await fetch(nextListOfGamesURL) : await getListOfGames();
        const nextList: IGames = await fetchNextListOfGames.json();
        updateListOfGames([...listOfGames!, ...nextList.results]);
        updateNextListOfGamesURL(nextList.next);
    };

    return { cardRef, listOfGames, isGamesLoading };
};

export default useGame;
