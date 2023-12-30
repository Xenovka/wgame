import { useLoaderData } from "react-router-dom";

function GameDetails() {
    const gameDetails = useLoaderData();
    console.log(gameDetails);

    return (
        <div>
            <h1>Game Details</h1>
        </div>
    );
}

export default GameDetails;
