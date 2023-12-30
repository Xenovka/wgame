import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { IGameResults } from "../../types/Games";
import { RefObject } from "react";
import { useNavigate } from "react-router-dom";

function GameCard({ game, cardRef }: { game: IGameResults; cardRef: RefObject<HTMLDivElement> | null }) {
    const navigate = useNavigate();

    return (
        <Card
            className="py-4"
            ref={cardRef}
            isPressable
            disableRipple
            onPress={() => {
                navigate(`/game/${game.id}`);
            }}
        >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{game.name}</h4>
            </CardHeader>
            <CardBody>
                <img
                    alt="Card background"
                    className="object-cover rounded-xl w-full h-52"
                    src={game.background_image}
                />
            </CardBody>
        </Card>
    );
}

export default GameCard;
