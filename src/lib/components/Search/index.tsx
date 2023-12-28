import { useDebouncedCallback } from "use-debounce";

import { searchGames } from "../../services/GameService";
import { useGameStore } from "../../store/GameStore";

function Search() {
    const { updateSearchedGames } = useGameStore();

    const onSearchGames = useDebouncedCallback(async (keyword) => {
        const games = await searchGames(keyword);
        updateSearchedGames(games.results);
    }, 500);

    return (
        <div className="py-4 mx-auto w-10/12">
            <input
                className="outline-none px-4 py-4 text-sm text-white w-full bg-neutral-800 rounded-full"
                type="text"
                placeholder="Search games..."
                onChange={(e) => onSearchGames(e.target.value)}
            />
        </div>
    );
}

export default Search;
