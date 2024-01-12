import { useEffect } from "react";
import { IGames } from "../../../types/Games";
import { useGameStore } from "../../../store/GameStore";
import { getListOfGames, getPopularGames } from "../../../services/GameService";

const useHome = (path: string) => {
    const { listOfGames, isGamesLoading, updateListOfGames, updateNextListOfGamesURL, updateLoading } = useGameStore(
        (state) => state
    );

    useEffect(() => {
        fetchListOfGames(path);

        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    const fetchListOfGames = async (path: string) => {
        let games: IGames;

        switch (path) {
            case "/popular":
                updateLoading("isGamesLoading", true);
                games = await getPopularGames();
                break;
            default:
                updateLoading("isGamesLoading", true);
                games = await getListOfGames();
                break;
        }

        updateListOfGames(games?.results);
        updateNextListOfGamesURL(games?.next);

        updateLoading("isGamesLoading", false);
    };

    return {
        listOfGames,
        isGamesLoading
    };
};

export default useHome;
