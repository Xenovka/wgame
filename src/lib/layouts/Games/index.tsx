import GameCard from "../../components/GameCard";
import Spinner from "../../components/Spinner";
import useGame from "./hooks/useGame";

function Games() {
    const { listOfGames, cardRef, isGamesLoading, isLoadingMoreGames } = useGame();

    if (isGamesLoading) return <Spinner label="Fetching Games..." fullHeight />;

    return (
        <div className="col-start-3 col-span-10">
            <div className="grid mt-10 pr-10 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1444px]:grid-cols-5 min-[1800px]:grid-cols-6 gap-6">
                {listOfGames?.map((game, index) => (
                    <GameCard key={index} game={game} cardRef={index === listOfGames.length - 1 ? cardRef : null} />
                ))}
            </div>
            {isLoadingMoreGames && (
                <div className="w-full h-fit my-4">
                    <Spinner label="Loading Games..." />
                </div>
            )}
        </div>
    );
}

export default Games;
