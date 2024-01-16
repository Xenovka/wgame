import { Fragment } from "react";
import ReactPlayer from "react-player";
import useGameDetails from "./hooks/useGameDetails";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

function GameDetails() {
    const { gameId } = useParams();

    const { gameTrailers, gameDetails, gameScreenshots, isGameDetailsLoading } = useGameDetails(gameId as string);

    console.log(gameDetails);

    if (isGameDetailsLoading) return <Spinner label="Fetchin Games..." fullHeight />;

    return (
        <Fragment>
            <div className="-z-10 w-full h-screen absolute top-0 left-0 overflow-hidden">
                {gameTrailers?.count === 0 ? (
                    <img
                        src={gameScreenshots?.results[0].image}
                        alt={gameDetails?.name}
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
                <div className="z-10 grid grid-cols-12 absolute top-10 h-full">
                    <h1 className="col-span-12 text-6xl font-bold mx-auto h-fit my-auto">{gameDetails?.name}</h1>
                    <div className="overflow-y-auto px-4 col-start-2 col-span-4 h-[400px]">
                        {gameDetails?.description_raw}
                    </div>
                    <div className="col-span-6 col-start-7 w-fit h-fit items-center flex flex-wrap gap-2">
                        {gameScreenshots?.results.slice(1).map((screenshot, index) => (
                            <img
                                key={index}
                                src={screenshot.image}
                                alt={`${gameDetails?.name}-${index}`}
                                className="w-96 object-cover rounded-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GameDetails;
