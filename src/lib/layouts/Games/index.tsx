import GameCard from "../../components/GameCard";
import useGame from "./hooks/useGame";

function Games() {
    const { listOfGames, cardRef } = useGame();

    return (
        <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {listOfGames?.map((game, index) => (
                <GameCard key={index} game={game} cardRef={index === listOfGames.length - 1 ? cardRef : null} />
            ))}
        </div>
    );
}

export default Games;
