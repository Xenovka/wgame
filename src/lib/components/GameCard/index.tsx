import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { IGameResults } from "../../types/Games";
import { RefObject } from "react";
import { useNavigate } from "react-router-dom";

function GameCard({ game, cardRef }: { game: IGameResults; cardRef: RefObject<HTMLDivElement> | null }) {
    const navigate = useNavigate();

    return (
        <Card
            className="bg-neutral-400 bg-opacity-25 rounded-xl game-card p-4"
            ref={cardRef}
            isPressable
            disableRipple
            onPress={() => {
                navigate(`/game/${game.id}`);
            }}
        >
            <CardHeader className="w-full overflow-hidden p-0 rounded-xl">
                <img
                    alt="Card background"
                    className="w-full h-52 inline-block bg-contain card-image ease-in duration-200"
                    src={game.background_image}
                />
            </CardHeader>
            <CardBody className="flex-col gap-2 py-3 px-0">
                <h2 className="text-left text-medium leading-5">{game.name}</h2>
            </CardBody>
        </Card>
    );
}

export default GameCard;
