import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";

import { IGameDetails } from "../../types/GameDetails";
import { IGameScreenshots } from "../../types/Games";
import animatedMouse from "../../../assets/animatedMouse.json";
import Lottie from "lottie-react";

interface ILoader {
    gameDetails: IGameDetails;
    gameScreenshots: IGameScreenshots;
}

function GameDetails() {
    const loader = useLoaderData() as ILoader;
    const gameDetails: IGameDetails = loader.gameDetails;
    const gameScreenshots: IGameScreenshots = loader.gameScreenshots;

    console.log(gameScreenshots);

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
            <div className="z-10 flex flex-col relative -top-20 left-0 justify-center h-screen">
                <h1 className="text-6xl font-bold mx-auto w-fit">{gameDetails.name}</h1>
                <div className="w-4/6 mx-auto mt-28">
                    <p className="text-center">{gameDetails.description_raw}</p>
                </div>
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center cursor-pointer">
                    <Lottie animationData={animatedMouse} loop={true} className="w-10" />
                    <p>Scroll Down</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 w-full items-center mx-auto">
                <h2 className="grid col-start-2 col-span-3 text-6xl font-bold">Screenshots</h2>
                <div className="col-start-7 col-span-6 grid w-fit grid-cols-2 gap-2">
                    {gameScreenshots.results.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot.image}
                            alt={`${gameDetails.name}-${index}`}
                            className="w-96 object-cover rounded-md"
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default GameDetails;
