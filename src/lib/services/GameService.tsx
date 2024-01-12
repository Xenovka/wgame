import { addMonths, format, nextMonday, nextSunday, subYears } from "date-fns";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getListOfGames = async () => {
    try {
        const games = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`, {
            mode: "cors"
        });

        const result = await games.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const searchGames = async (keyword: string) => {
    try {
        const search = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${keyword}`, {
            mode: "cors"
        });

        const result = search.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getGameDetails = async (gameId: string) => {
    console.log(gameId);

    try {
        const gameDetails = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`, {
            mode: "cors"
        });

        const result = await gameDetails.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getGameScreenshots = async (gameSlug: string) => {
    try {
        const gameScreenshots = await fetch(
            `https://api.rawg.io/api/games/${gameSlug}/screenshots?key=${API_KEY}&page_size=5`,
            {
                mode: "cors"
            }
        );

        const result = await gameScreenshots.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getGameTrailers = async (gameId: string) => {
    try {
        const gameTrailers = await fetch(`https://api.rawg.io/api/games/${gameId}/movies?key=${API_KEY}`, {
            mode: "cors"
        });

        const result = await gameTrailers.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getPopularGames = async () => {
    try {
        const popularGames = await fetch(`https://api.rawg.io/api/games?metacritic=85,100&key=${API_KEY}`, {
            mode: "cors"
        });

        const result = await popularGames.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getUpcomingGames = async () => {
    const date = new Date();
    const nextMondayWeek = format(nextSunday(date), "yyyy-MM-dd");
    const nextMondayMonth = format(addMonths(nextMonday(date), 4), "yyyy-MM-dd");

    try {
        const upcomingGames = await fetch(
            `https://api.rawg.io/api/games?dates=${nextMondayWeek},${nextMondayMonth}&key=${API_KEY}`,
            {
                mode: "cors"
            }
        );

        const result = await upcomingGames.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getNewGames = async () => {
    const date = new Date();
    const lastYear = format(addMonths(subYears(date, 1), 8), "yyyy-MM-dd");
    const today = format(date, "yyyy-MM-dd");

    try {
        const newGames = await fetch(`https://api.rawg.io/api/games?dates=${lastYear},${today}&key=${API_KEY}`, {
            mode: "cors"
        });

        const result = await newGames.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
