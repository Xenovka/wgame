import { useEffect } from "react";
import { IGames } from "../../../types/Games";
import { useGameStore } from "../../../store/GameStore";
import { getListOfGames, getNewGames, getPopularGames, getUpcomingGames } from "../../../services/GameService";

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
            case "/new-releases":
                updateLoading("isGamesLoading", true);
                games = await getNewGames();
                break;
            case "/upcoming":
                updateLoading("isGamesLoading", true);
                games = await getUpcomingGames();
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
