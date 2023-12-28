import Search from "../../components/Search";

function NavBar() {
    return (
        <div className="flex items-center">
            <h1 className="text-4xl font-bold nav-brand">W - GAME</h1>
            <Search />
        </div>
    );
}

export default NavBar;
