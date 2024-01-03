import Games from "../../layouts/Games";
import SideBar from "../../layouts/SideBar";

function HomePage() {
    return (
        <div className="grid grid-cols-12">
            <SideBar />
            <Games />;
        </div>
    );
}

export default HomePage;
