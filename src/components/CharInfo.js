import { useState, useEffect } from "react";
import usePokemonService from "../service/PokemonService";
import Skeleton from "./Skeleton";
import Spinner from "./Spinner";

const CharInfo = (props) => {
    const [char, setChar] = useState(null);
    const { loading, error, getCharacter } = usePokemonService();

    useEffect(() => {
        updateChar();
    }, [props.charId]);

    const updateChar = () => {
        const { charId } = props;
        if (!charId) {
            return;
        }

        getCharacter(charId)
            .then(onCharLoaded);
    };

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const skeleton = char || loading || error ? null : <Skeleton />;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="flex flex-col items-center justify-start">
            {skeleton}
            {spinner}
            {content}
        </div>
    );
};

const View = ({ char }) => {
    const { id, name, imageUrl, types, attack, defense, hp, spAttack, spDefense, speed, weight, totalMoves } = char;
    return (
        <div className="w-full p-4 md:w-80 md:p-6 rounded-md shadow-md flex flex-col items-start">
            <img src={imageUrl} alt={name} className="mx-auto w-52 h-52 mb-4" />
            <h1 className="text-xl md:text-2xl font-semibold mb-4">{name} #0{id}</h1>
            <p className="mb-2">Types: {types.join(", ")}</p>
            <p className="mb-2">Attack: {attack}</p>
            <p className="mb-2">Defense: {defense}</p>
            <p className="mb-2">HP: {hp}</p>
            <p className="mb-2">spAttack: {spAttack}</p>
            <p className="mb-2">spDefense: {spDefense}</p>
            <p className="mb-2">speed: {speed}</p>
            <p className="mb-2">weight: {weight}</p>
            <p className="mb-2">totalMoves: {totalMoves}</p>
        </div>
    );
};

export default CharInfo;
