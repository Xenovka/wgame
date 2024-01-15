import { Link } from "react-router-dom";
import Search from "../../components/Search";
import { SignIn, SignOut } from "../../auth/AuthService";

function NavBar() {
    return (
        <div className="grid items-center relative z-50 grid-cols-12">
            <div className="col-span-2 mx-auto">
                <Link to="/" className="text-4xl font-bold nav-brand cursor-pointer text-center">
                    W - GAME
                </Link>
            </div>
            <Search />
            <div className="col-span-2 flex gap-4">
                <button onClick={SignIn}>Login</button>
                <button onClick={SignOut}>SignOut</button>
            </div>
        </div>
    );
}

export default NavBar;
