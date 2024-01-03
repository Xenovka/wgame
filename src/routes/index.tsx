import { createBrowserRouter } from "react-router-dom";

import HomePage from "../lib/pages/Home";
import DetailsPage from "../lib/pages/Details";
import { getGameDetails, getGameScreenshots } from "../lib/services/GameService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/game/:gameId",
        element: <DetailsPage />,
        loader: async ({ params }) => {
            const gameDetails = await getGameDetails(params.gameId as string);
            const gameScreenshots = await getGameScreenshots(gameDetails.slug);

            return { gameDetails, gameScreenshots };
        }
    }
]);

export default router;
