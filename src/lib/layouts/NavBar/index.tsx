import Search from "../../components/Search";

function NavBar() {
    return (
        <div className="flex items-center relative z-50">
            <a className="text-4xl font-bold nav-brand cursor-pointer" href="/">
                W - GAME
            </a>
            <Search />
        </div>
    );
}

export default NavBar;
