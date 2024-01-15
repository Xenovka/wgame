import { Link } from "react-router-dom";
import Search from "../../components/Search";
import { Avatar } from "@nextui-org/react";
import useNavBar from "./hooks/useNavBar";
import { Fragment } from "react";

function NavBar() {
    const { userCredentials, signInWithGoogle, signOut } = useNavBar();

    return (
        <div className="grid items-center relative z-50 grid-cols-12">
            <div className="col-span-2 mx-auto">
                <Link to="/" className="text-4xl font-bold nav-brand cursor-pointer text-center">
                    W - GAME
                </Link>
            </div>
            <Search />
            <div className="col-span-2 flex items-center gap-4 justify-center">
                {userCredentials ? (
                    <Fragment>
                        <div className="w-5/12 px-4 overflow-hidden text-ellipsis whitespace-nowrap">
                            Hi, {userCredentials.displayName}
                        </div>
                        <Avatar
                            className="cursor-pointer"
                            isBordered
                            color="default"
                            showFallback
                            name={userCredentials.displayName!}
                            src={userCredentials.photoURL!}
                        />
                        <button
                            className="text-white bg-neutral-800 px-6 py-3 rounded-full text-sm font-semibold"
                            onClick={signOut}
                        >
                            Log Out
                        </button>
                    </Fragment>
                ) : (
                    <button
                        className="text-white px-6 py-4 rounded-full text-sm font-semibold"
                        onClick={signInWithGoogle}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
}

export default NavBar;
