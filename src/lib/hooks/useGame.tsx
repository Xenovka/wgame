import { useEffect } from "react";

import { getListOfGames } from "../services/GameService";
import { Games } from "../types/Games";
import { useGameStore } from "../store/GameStore";

const useGame = () => {
    const { listOfGames, updateListOfGames } = useGameStore((state) => state);

    useEffect(() => {
        if (listOfGames) return;

        const fetchListOfGames = async () => {
            const games: Games = await getListOfGames();

            updateListOfGames(games);
        };

        fetchListOfGames();

        return () => {};
    }, [updateListOfGames, listOfGames]);

    return { listOfGames };
};

export default useGame;
