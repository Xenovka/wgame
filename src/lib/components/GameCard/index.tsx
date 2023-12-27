import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { GameResults } from "../../types/Games";
import { RefObject } from "react";

function GameCard({ game, cardRef }: { game: GameResults; cardRef: RefObject<HTMLDivElement> | null }) {
    return (
        <Card className="py-4" ref={cardRef}>
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
