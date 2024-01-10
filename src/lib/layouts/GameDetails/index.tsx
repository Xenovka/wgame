import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";

import { IGameDetails } from "../../types/GameDetails";
import { IGameScreenshots, IGameTrailers } from "../../types/Games";
import animatedMouse from "../../../assets/animatedMouse.json";
import Lottie from "lottie-react";
import ReactPlayer from "react-player";

interface ILoader {
    gameDetails: IGameDetails;
    gameScreenshots: IGameScreenshots;
    gameTrailers: IGameTrailers;
}

function GameDetails() {
    const loader = useLoaderData() as ILoader;
    const gameDetails: IGameDetails = loader.gameDetails;
    const gameScreenshots: IGameScreenshots = loader.gameScreenshots;
    const gameTrailers: IGameTrailers = loader.gameTrailers;

    console.log(gameDetails);

    return (
        <Fragment>
            <div className="-z-10 w-full h-screen absolute top-0 left-0 overflow-hidden">
                {gameTrailers.count === 0 ? (
                    <img
                        src={gameScreenshots.results[0].image}
                        alt={gameDetails.name}
                        className="absolute w-full h-full opacity-40"
                    />
                ) : (
                    <div className="opacity-50 absolute w-screen left-0 -top-32 -z-10">
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            url={gameTrailers?.results[0]?.data?.max}
                            playing
                            loop
                            muted
                        />
                    </div>
                )}
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
            <div className="grid grid-cols-12 gap-6 w-full justify-center mx-auto relative">
                <h2 className="col-start-2 col-span-4 text-center text-6xl font-bold">Gameplay</h2>
                <div className="col-start-6 col-span-6 grid w-fit items-center grid-cols-2 gap-2">
                    {gameScreenshots.results.slice(1).map((screenshot, index) => (
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
