import { Route, Routes } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavBar from "./lib/layouts/NavBar";
import HomePage from "./lib/pages/Home";
import DetailsPage from "./lib/pages/Details";

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
                    <Route path="/game/:gameId" element={<DetailsPage />} />
                </Routes>
            </main>
        </NextThemesProvider>
    );
}

export default App;
