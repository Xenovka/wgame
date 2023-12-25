import "./App.css";
import useGame from "./lib/hooks/useGame";

function App() {
    const { listOfGames } = useGame();

    console.log(listOfGames);

    return (
        <div>
            <h1 className="text-4xl font-bold nav-brand">W - GAME</h1>
        </div>
    );
}

export default App;
