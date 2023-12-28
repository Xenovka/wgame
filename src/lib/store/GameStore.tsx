import { create } from "zustand";
import { GameResults } from "../types/Games";

interface State {
    listOfGames: GameResults[] | null;
    nextListOfGamesURL: string;
    prevListOfGamesURL: string;
    searchedGames: GameResults[] | null;
}

interface Action {
    updateListOfGames: (games: GameResults[]) => void;
    updateNextListOfGamesURL: (nextListOfGamesURL: string) => void;
    updatePrevListOfGamesURL: (prevListOfGamesURL: string) => void;
    updateSearchedGames: (searchedGames: GameResults[]) => void;
}

export const useGameStore = create<State & Action>((set) => ({
    listOfGames: null,
    nextListOfGamesURL: "",
    prevListOfGamesURL: "",
    searchInput: "",
    searchedGames: null,
    updateListOfGames: (listOfGames) => set({ listOfGames }),
    updateNextListOfGamesURL: (nextListOfGamesURL) => set({ nextListOfGamesURL }),
    updatePrevListOfGamesURL: (prevListOfGamesURL) => set({ prevListOfGamesURL }),
    updateSearchedGames: (searchedGames) => set({ searchedGames })
}));
