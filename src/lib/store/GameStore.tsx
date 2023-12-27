import { create } from "zustand";
import { GameResults } from "../types/Games";

interface State {
    listOfGames: GameResults[] | null;
}

interface Action {
    updateListOfGames: (games: GameResults[]) => void;
}

export const useGameStore = create<State & Action>((set) => ({
    listOfGames: null,
    updateListOfGames: (listOfGames) => set({ listOfGames })
}));
