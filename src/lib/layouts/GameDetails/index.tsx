import { useLoaderData } from "react-router-dom";
import { IGameDetails } from "../../types/GameDetails";
import { Fragment } from "react";

function GameDetails() {
    const gameDetails = useLoaderData() as IGameDetails;
    console.log(gameDetails);

    return (
        <Fragment>
            <div className="-z-10 w-full h-screen absolute top-0 left-0">
                <img
                    src={gameDetails.background_image}
                    alt={gameDetails.name}
                    className="absolute w-full h-full opacity-25"
                />
                <div className="absolute w-full h-full bg-gradient-to-t from-black from-40%"></div>
            </div>
            <div className="flex flex-col absolute top-0 left-0 justify-center h-screen">
                <h1 className="text-6xl font-bold mx-auto w-fit">{gameDetails.name}</h1>
                <div className="w-4/6 mx-auto mt-28">
                    <p className="text-center">{gameDetails.description_raw}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default GameDetails;
