import { FaCrown, FaStar } from "react-icons/fa6";
import { FaFastForward } from "react-icons/fa";
import { ImFire } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const sidebarMenus = [
    {
        name: "Popular",
        url: "/popular",
        icon: <FaCrown />
    },
    {
        name: "Trending",
        url: "/trending",
        icon: <ImFire />
    },
    {
        name: "New Releases",
        url: "/new-releases",
        icon: <FaStar />
    },
    {
        name: "Upcoming",
        url: "/upcoming",
        icon: <FaFastForward />
    }
];

function SideBar() {
    const navigate = useNavigate();

    return (
        <div className="col-span-2 flex flex-col gap-2 mt-10 mx-auto w-3/4">
            {sidebarMenus.map((menu, index) => (
                <div
                    key={index}
                    className="flex gap-4 items-center cursor-pointer"
                    onClick={() => {
                        navigate(menu.url);
                    }}
                >
                    <span className="bg-neutral-800 p-3 rounded-lg bg-opacity-80 text-2xl">{menu.icon}</span>
                    <h2 className="text-lg font-bold">{menu.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default SideBar;
