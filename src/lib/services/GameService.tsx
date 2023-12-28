export const getListOfGames = async () => {
    try {
        const games = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`, {
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
        const search = await fetch(
            `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${keyword}`,
            {
                mode: "cors"
            }
        );

        const result = search.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
