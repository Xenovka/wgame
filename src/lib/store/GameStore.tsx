import { create } from "zustand";
import { IGameResults, IGameScreenshots, IGameTrailers } from "../types/Games";
import { IGameDetails } from "../types/GameDetails";

interface State {
    listOfGames: IGameResults[] | null;
    nextListOfGamesURL: string;
    prevListOfGamesURL: string;
    searchedGames: IGameResults[] | null;
    gameDetails: IGameDetails | null;
    gameScreenshots: IGameScreenshots | null;
    gameTrailers: IGameTrailers | null;
    isGamesLoading: boolean;
    isGameDetailsLoading: boolean;
    isSearchLoading: boolean;
    isLoadingMoreGames: boolean;
    isSearchOpen: boolean;
}

interface Action {
    updateListOfGames: (games: IGameResults[]) => void;
    updateNextListOfGamesURL: (nextListOfGamesURL: string) => void;
    updatePrevListOfGamesURL: (prevListOfGamesURL: string) => void;
    updateSearchedGames: (searchedGames: IGameResults[] | null) => void;
    updateGameDetails: (gameDetails: IGameDetails) => void;
    updateConditionalState: (stateName: string, condition: boolean) => void;
    updateGameScreenshots: (gameScreenshots: IGameScreenshots) => void;
    updateGameTrailers: (gameTrailers: IGameTrailers) => void;
}

export const useGameStore = create<State & Action>((set) => ({
    listOfGames: null,
    nextListOfGamesURL: "",
    prevListOfGamesURL: "",
    searchInput: "",
    isGamesLoading: false,
    isGameDetailsLoading: false,
    isSearchLoading: false,
    isLoadingMoreGames: false,
    isSearchOpen: false,
    searchedGames: null,
    gameDetails: null,
    gameScreenshots: null,
    gameTrailers: null,
    updateListOfGames: (listOfGames) => set({ listOfGames }),
    updateNextListOfGamesURL: (nextListOfGamesURL) => set({ nextListOfGamesURL }),
    updatePrevListOfGamesURL: (prevListOfGamesURL) => set({ prevListOfGamesURL }),
    updateSearchedGames: (searchedGames) => set({ searchedGames }),
    updateGameDetails: (gameDetails) => set({ gameDetails }),
    updateConditionalState: (stateName, condition) => set({ [stateName]: condition }),
    updateGameScreenshots: (gameScreenshots) => set({ gameScreenshots }),
    updateGameTrailers: (gameTrailers) => set({ gameTrailers })
}));
