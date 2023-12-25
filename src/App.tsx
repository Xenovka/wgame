import { useEffect } from "react";
import "./App.css";
function App() {
    useEffect(() => {
        const fetchGames = async () => {
            const games = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`);
            const result = await games.json();
            console.log(result);
        };

        fetchGames();

        return () => {};
    }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold">Hello</h1>
        </div>
    );
}

export default App;
