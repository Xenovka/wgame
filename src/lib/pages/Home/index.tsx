import { useLoaderData } from "react-router-dom";
import Games from "../../layouts/Games";
import SideBar from "../../layouts/SideBar";
import { IGames } from "../../types/Games";
import useGame from "../../layouts/Games/hooks/useGame";
import { useEffect } from "react";

function HomePage() {
    const games: IGames = useLoaderData() as IGames;
    const { fetchListOfGames } = useGame();

    useEffect(() => {
        fetchListOfGames(games);

        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [games]);

    return (
        <div className="grid grid-cols-12">
            <SideBar />
            <Games />
        </div>
    );
}

export default HomePage;
