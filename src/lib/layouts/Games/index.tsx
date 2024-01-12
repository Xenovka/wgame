import { Spinner } from "@nextui-org/react";
import GameCard from "../../components/GameCard";
import useGame from "./hooks/useGame";

function Games() {
    const { listOfGames, cardRef, isGamesLoading } = useGame();

    if (isGamesLoading)
        return (
            <div className="w-full h-full grid col-span-10 justify-center items-center">
                <Spinner
                    className="flex justify-center items-center w-full h-full"
                    label="Fetching Games..."
                    color="default"
                    size="lg"
                />
            </div>
        );

    return (
        <div className="col-start-3 col-span-10">
            <div className="grid mt-10 pr-10 max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {listOfGames?.map((game, index) => (
                    <GameCard key={index} game={game} cardRef={index === listOfGames.length - 1 ? cardRef : null} />
                ))}
            </div>
        </div>
    );
}

export default Games;
