import Search from "../../components/Search";

function NavBar() {
    return (
        <div className="flex items-center">
            <a className="text-4xl font-bold nav-brand cursor-pointer" href="/">
                W - GAME
            </a>
            <Search />
        </div>
    );
}

export default NavBar;
