import { create } from "zustand";
import { IGameResults } from "../types/Games";
import { getGameDetails } from "../services/GameService";

interface State {
    listOfGames: IGameResults[] | null;
    nextListOfGamesURL: string;
    prevListOfGamesURL: string;
    searchedGames: IGameResults[] | null;
    gameDetails: IGameResults | null;
    isGamesLoading: boolean;
    isGameDetailsLoading: boolean;
    isSearchLoading: boolean;
    isLoadingMoreGames: boolean;
}

interface Action {
    updateListOfGames: (games: IGameResults[]) => void;
    updateNextListOfGamesURL: (nextListOfGamesURL: string) => void;
    updatePrevListOfGamesURL: (prevListOfGamesURL: string) => void;
    updateSearchedGames: (searchedGames: IGameResults[] | null) => void;
    updateGameDetails: (gameId: string) => void;
    updateLoading: (stateName: string, condition: boolean) => void;
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
    searchedGames: null,
    gameDetails: null,
    updateListOfGames: (listOfGames) => set({ listOfGames }),
    updateNextListOfGamesURL: (nextListOfGamesURL) => set({ nextListOfGamesURL }),
    updatePrevListOfGamesURL: (prevListOfGamesURL) => set({ prevListOfGamesURL }),
    updateSearchedGames: (searchedGames) => set({ searchedGames }),
    updateGameDetails: async (gameId) => {
        const gameDetails = await getGameDetails(gameId);
        set({ gameDetails });
    },
    updateLoading: (stateName, condition) => set({ [stateName]: condition })
}));
