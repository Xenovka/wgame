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
