import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HomePage from "../lib/pages/Home";
import DetailsPage from "../lib/pages/Details";
import { getGameDetails } from "../lib/services/GameService";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/game/:gameId"
                element={<DetailsPage />}
                loader={({ params }) => {
                    return getGameDetails(params.gameId as string);
                }}
            />
        </>
    )
);

export default router;
