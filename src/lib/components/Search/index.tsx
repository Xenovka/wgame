import { useDebouncedCallback } from "use-debounce";

import { searchGames } from "../../services/GameService";
import { useGameStore } from "../../store/GameStore";

function Search() {
    const { searchedGames, updateSearchedGames } = useGameStore();

    const onSearchGames = useDebouncedCallback(async (keyword) => {
        if (keyword === "") return updateSearchedGames(null);

        const games = await searchGames(keyword);
        updateSearchedGames(games.results);
    }, 500);

    return (
        <div className="relative grid col-span-9 py-4 w-full">
            <input
                className="outline-none px-6 py-4 text-sm text-white w-full bg-neutral-800 bg-opacity-80 rounded-full"
                type="text"
                placeholder="Search games..."
                onChange={(e) => onSearchGames(e.target.value)}
            />
            {searchedGames && (
                <div className="absolute flex flex-col gap-4 p-4 top-full left-0 w-full h-[600px] overflow-y-scroll scrollbar-hide bg-neutral-800 z-20 rounded-xl">
                    {searchedGames?.map((game, index) => (
                        <div key={index} className="flex gap-4">
                            <img src={game.background_image} alt={game.name} className="w-36 h-32 rounded-xl" />
                            <h3 className="font-semibold">{game.name}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
