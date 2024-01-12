import { useLocation } from "react-router-dom";
import Games from "../../layouts/Games";
import SideBar from "../../layouts/SideBar";
import useHome from "./hooks/useHome";

function HomePage() {
    const location = useLocation();

    const { listOfGames } = useHome(location.pathname);

    console.log(listOfGames);

    return (
        <div className="grid grid-cols-12">
            <SideBar />
            <Games />
        </div>
    );
}

export default HomePage;
