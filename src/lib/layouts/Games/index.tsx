import GameCard from "../../components/GameCard";
import useGame from "./hooks/useGame";

function Games() {
    const { listOfGames, cardRef } = useGame();

    return (
        <div className="grid grid-cols-4 gap-4">
            {listOfGames?.map((game, index) => (
                <GameCard key={index} game={game} cardRef={index === listOfGames.length - 1 ? cardRef : null} />
            ))}
        </div>
    );
}

export default Games;
