import { useLoaderData } from "react-router-dom";
import { IGameDetails } from "../../types/GameDetails";

function GameDetails() {
    const gameDetails = useLoaderData() as IGameDetails;
    console.log(gameDetails);

    return (
        <div>
            <h1>{gameDetails.name}</h1>
        </div>
    );
}

export default GameDetails;
