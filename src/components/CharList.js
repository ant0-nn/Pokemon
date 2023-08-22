import { useEffect, useState } from "react";
import usePokemonService from "../service/PokemonService";
import CharItem from "./CharItem";
import Spinner from "./Spinner";

const CharList = ({ onCharSelected }) => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadedCount, setLoadedCount] = useState(12);
    const [loadStep, setLoadStep] = useState(12);
    const [newItemLoading, setNewItemLoading] = useState(false);

    const { getAllPokemons, loading } = usePokemonService();

    useEffect(() => {
        setAllPokemons([]);
        setLoadedCount(loadStep);
        getPokemons();
    }, []);

    const getPokemons = async () => {
        if (!newItemLoading) {
            const newPokemons = await getAllPokemons(loadedCount); 
            setAllPokemons(newPokemons);
            setNewItemLoading(false);
        }
    };

    const loadMorePokemons = async () => {
        const newLoadedCount = loadedCount + loadStep;
        const newPokemons = await getAllPokemons( newLoadedCount);
        setAllPokemons(newPokemons);
        setLoadedCount(newLoadedCount);
        setNewItemLoading(true);
    };

    function renderItems(arr) {
        const items = arr.map(pokemonStats => (
            <CharItem
                key={pokemonStats.id}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                types={pokemonStats.types.map(type => type.type.name)}
                onCharSelected={onCharSelected}
            />
        ));

        return (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {items}
            </ul>
        );
    }

    const spinner = (loading && !newItemLoading) ? <Spinner /> : null;
    const content = renderItems(allPokemons);

    return (
        <div className="space-y-6">
            {spinner}
            {content}
            <button
                onClick={loadMorePokemons}
                className="w-full mx-auto bg-blue-400 hover:bg-blue-500 text-white py-5 rounded-lg transition duration-300 ease-in-out grid"
            >
                Load More
            </button>
        </div>
    );
};

export default CharList;
