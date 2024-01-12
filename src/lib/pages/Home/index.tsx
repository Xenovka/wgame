import { useLocation } from "react-router-dom";
import Games from "../../layouts/Games";
import SideBar from "../../layouts/SideBar";
import useHome from "./hooks/useHome";

function HomePage() {
    const location = useLocation();
    console.log(location.pathname);

    const { listOfGames, isGamesLoading } = useHome(location.pathname);

    console.log(listOfGames);
    console.log(isGamesLoading);

    return (
        <div className="grid grid-cols-12">
            <SideBar />
            <Games />
        </div>
    );
}

export default HomePage;
