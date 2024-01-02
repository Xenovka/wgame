import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HomePage from "../lib/pages/Home";
import DetailsPage from "../lib/pages/Details";
import { getGameDetails, getGameScreenshots } from "../lib/services/GameService";
import { Fragment } from "react";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Fragment>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/game/:gameId"
                element={<DetailsPage />}
                loader={async ({ params }) => {
                    const gameDetails = await getGameDetails(params.gameId as string);
                    const gameScreenshots = await getGameScreenshots(gameDetails.slug);

                    return { gameDetails, gameScreenshots };
                }}
            />
        </Fragment>
    )
);

export default router;
