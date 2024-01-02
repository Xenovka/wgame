import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { IGameResults } from "../../types/Games";
import { RefObject } from "react";
import { useNavigate } from "react-router-dom";

function GameCard({ game, cardRef }: { game: IGameResults; cardRef: RefObject<HTMLDivElement> | null }) {
    const navigate = useNavigate();

    return (
        <Card
            className="bg-neutral-800 bg-opacity-30 rounded-xl game-card card-backlight"
            ref={cardRef}
            isPressable
            disableRipple
            onPress={() => {
                navigate(`/game/${game.id}`);
            }}
        >
            <CardHeader className="w-full overflow-hidden">
                <img
                    alt="Card background"
                    className="w-full h-52 inline-block bg-contain card-image ease-in duration-200"
                    src={game.background_image}
                />
            </CardHeader>
            <CardBody className="p-4 flex-col gap-2 m-2">
                <h2 className="text-left font-bold text-large leading-5">{game.name}</h2>
                <p>
                    ⭐ {game.rating}/5 ({game.ratings_count})
                </p>
            </CardBody>
        </Card>
    );
}

export default GameCard;
