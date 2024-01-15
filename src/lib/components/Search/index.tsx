import Spinner from "../Spinner";
import useSearch from "./hooks/useSearch";

function Search() {
    const { searchedGames, onSearchGames, isSearchLoading, isSearchOpen } = useSearch();

    console.log(isSearchLoading);

    return (
        <div className="relative grid col-span-8 py-4 w-full">
            <input
                className="outline-none px-6 py-4 text-sm text-white w-full bg-neutral-800 bg-opacity-80 focus:bg-slate-100 focus:text-black transition-all duration-250 rounded-full"
                type="text"
                placeholder="Search games..."
                onChange={(e) => onSearchGames(e.target.value)}
            />
            {isSearchOpen && (
                <div className="absolute flex flex-col gap-4 p-4 top-full left-0 w-full h-[600px] overflow-y-scroll scrollbar-hide bg-neutral-800 z-20 rounded-xl">
                    {isSearchLoading ? (
                        <div className="w-full h-full">
                            <Spinner label="Searching Games..." />
                        </div>
                    ) : (
                        searchedGames?.map((game, index) => (
                            <div key={index} className="flex gap-4">
                                <img src={game.background_image} alt={game.name} className="w-36 h-32 rounded-xl" />
                                <h3 className="font-semibold">{game.name}</h3>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
