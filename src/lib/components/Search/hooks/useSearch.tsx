import { useDebouncedCallback } from "use-debounce";
import { useGameStore } from "../../../store/GameStore";
import { searchGames } from "../../../services/GameService";

const useSearch = () => {
    const { searchedGames, isSearchLoading, isSearchOpen, updateSearchedGames, updateConditionalState } =
        useGameStore();

    const onSearchGames = useDebouncedCallback(async (keyword) => {
        if (keyword === "") {
            updateSearchedGames(null);
            updateConditionalState("isSearchOpen", false);
            return;
        }

        updateConditionalState("isSearchLoading", true);
        updateConditionalState("isSearchOpen", true);

        const games = await searchGames(keyword);
        updateSearchedGames(games.results);

        updateConditionalState("isSearchLoading", false);
    }, 500);

    return { searchedGames, onSearchGames, isSearchLoading, isSearchOpen };
};

export default useSearch;
