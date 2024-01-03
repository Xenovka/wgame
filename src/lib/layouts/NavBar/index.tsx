import Search from "../../components/Search";

function NavBar() {
    return (
        <div className="grid items-center relative z-50 grid-cols-12">
            <div className="col-span-2 mx-auto">
                <a className="text-4xl font-bold nav-brand cursor-pointer  text-center" href="/">
                    W - GAME
                </a>
            </div>
            <Search />
        </div>
    );
}

export default NavBar;
