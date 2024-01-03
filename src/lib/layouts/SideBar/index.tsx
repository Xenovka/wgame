import { FaCrown } from "react-icons/fa6";

function SideBar() {
    return (
        <div className="col-span-2 mt-10 mx-auto w-3/4">
            <div className="flex gap-4 items-center cursor-pointer bg-neutral-800 px-6 py-3 rounded-lg bg-opacity-80">
                <span className="text-2xl">
                    <FaCrown />
                </span>
                <h2 className="text-xl font-semibold">Popular</h2>
            </div>
        </div>
    );
}

export default SideBar;
