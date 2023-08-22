import { useHttp } from "../hook/http.hook";

const usePokemonService = () => {
    const { loading, request, error } = useHttp();
    const basic_api = "https://pokeapi.co/api/v2/";

    const getAllPokemons = async (number) => {
        try {
            const data = await request(`${basic_api}pokemon?limit=${number}`);
            const promises = data.results.map(async pokemon => {
                const pokemonData = await request(pokemon.url);
                return pokemonData;
            });

            const newPokemons = await Promise.all(promises);
            return newPokemons;
        } catch (e) {
            console.error("Error fetching Pokemon data:", e);
            return [];
        }
    };

    const getCharacter = async (id) => {
        const res = await request(`${basic_api}pokemon/${id}`);

        const { name, sprites, types, stats, weight, moves } = res;

        const attack = stats.find(stat => stat.stat.name === "attack").base_stat;
        const defense = stats.find(stat => stat.stat.name === "defense").base_stat;
        const hp = stats.find(stat => stat.stat.name === "hp").base_stat;
        const spAttack = stats.find(stat => stat.stat.name === "special-attack").base_stat;
        const spDefense = stats.find(stat => stat.stat.name === "special-defense").base_stat;
        const speed = stats.find(stat => stat.stat.name === "speed").base_stat;
        const totalMoves = moves.length;
        const typeNames = types.map(type => type.type.name);
        const imageUrl = sprites.other.dream_world.front_default;
        return {
            id,
            name,
            imageUrl,
            types: typeNames,
            attack,
            defense,
            hp,
            spDefense,
            spAttack,
            speed,
            weight,
            totalMoves
        };
    }

    return {
        getAllPokemons,
        getCharacter,
        loading,
        error
    };
};

export default usePokemonService;
