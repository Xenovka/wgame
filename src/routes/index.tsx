import { createBrowserRouter } from "react-router-dom";

import HomePage from "../lib/pages/Home";
import DetailsPage from "../lib/pages/Details";
import {
    getGameDetails,
    getGameScreenshots,
    getGameTrailers,
    getListOfGames,
    getPopularGames
} from "../lib/services/GameService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        loader: async () => {
            const listOfGames = await getListOfGames();
            return listOfGames;
        }
    },
    {
        path: "/popular",
        element: <HomePage />,
        loader: async () => {
            const popularGames = await getPopularGames();
            return popularGames;
        }
    },
    {
        path: "/game/:gameId",
        element: <DetailsPage />,
        loader: async ({ params }) => {
            const gameDetails = await getGameDetails(params.gameId as string);
            const gameScreenshots = await getGameScreenshots(gameDetails.slug);
            const gameTrailers = await getGameTrailers(params.gameId as string);

            return { gameDetails, gameScreenshots, gameTrailers };
        }
    }
]);

export default router;
