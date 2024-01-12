import { Link } from "react-router-dom";
import Search from "../../components/Search";

function NavBar() {
    return (
        <div className="grid items-center relative z-50 grid-cols-12">
            <div className="col-span-2 mx-auto">
                <Link to="/" className="text-4xl font-bold nav-brand cursor-pointer text-center">
                    W - GAME
                </Link>
            </div>
            <Search />
        </div>
    );
}

export default NavBar;
