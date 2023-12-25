import { create } from "zustand";
import { Games } from "../types/Games";

interface State {
    listOfGames: Games | Promise<Games> | null;
}

interface Action {
    updateListOfGames: (games: Games | Promise<Games>) => void;
}

export const useGameStore = create<State & Action>((set) => ({
    listOfGames: null,
    updateListOfGames: (games) => set({ listOfGames: games })
}));
