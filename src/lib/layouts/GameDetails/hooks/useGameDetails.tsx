import { useEffect } from "react";
import { getGameDetails, getGameScreenshots, getGameTrailers } from "../../../services/GameService";
import { useGameStore } from "../../../store/GameStore";

const useGameDetails = (gameId: string) => {
    const {
        gameDetails,
        gameScreenshots,
        gameTrailers,
        updateGameScreenshots,
        updateGameTrailers,
        isGameDetailsLoading,
        updateGameDetails,
        updateConditionalState
    } = useGameStore((state) => state);

    useEffect(() => {
        fetchGameDetails(gameId);

        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameId]);

    const fetchGameDetails = async (gameId: string) => {
        updateConditionalState("isGameDetailsLoading", true);

        const details = await getGameDetails(gameId);
        const screenshots = await getGameScreenshots(details.slug);
        const trailers = await getGameTrailers(gameId);

        updateGameDetails(details);
        updateGameScreenshots(screenshots);
        updateGameTrailers(trailers);
        updateConditionalState("isGameDetailsLoading", false);
    };

    return { gameDetails, gameScreenshots, gameTrailers, isGameDetailsLoading };
};

export default useGameDetails;
