import { Route, Routes } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavBar from "./lib/layouts/NavBar";
import HomePage from "./lib/pages/Home";
import DetailsPage from "./lib/pages/Details";
import { getGameDetails, getGameScreenshots, getGameTrailers } from "./lib/services/GameService";

function App() {
    return (
        <NextThemesProvider>
            <main className="dark text-foreground p-4">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/popular" element={<HomePage />} />
                    <Route path="/new-releases" element={<HomePage />} />
                    <Route path="/upcoming" element={<HomePage />} />
                    <Route
                        path="/game/:gameId"
                        element={<DetailsPage />}
                        loader={async ({ params }) => {
                            const gameDetails = await getGameDetails(params.gameId as string);
                            const gameScreenshots = await getGameScreenshots(gameDetails.slug);
                            const gameTrailers = await getGameTrailers(params.gameId as string);

                            return { gameDetails, gameScreenshots, gameTrailers };
                        }}
                    />
                </Routes>
            </main>
        </NextThemesProvider>
    );
}

export default App;
