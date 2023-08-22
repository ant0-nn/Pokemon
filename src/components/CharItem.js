const CharItem = ({ image, name, types, onCharSelected, id }) => {
    const getTypeBackground = (type) => {
        const typeColors = {
            grass: 'bg-green-300',
            bug: 'bg-green-400',
            fire: 'bg-orange-300',
            water: 'bg-blue-300',
            poison: 'bg-purple-300',
            electric: 'bg-yellow-300',
            normal: 'bg-gray-300',
            fighting: 'bg-red-300',
            psychic: 'bg-pink-300',
            ground: 'bg-green-200',
            rock: 'bg-brown-400',
            ghost: 'bg-indigo-300',
            ice: 'bg-cyan-300',
            dragon: 'bg-indigo-400',
            steel: 'bg-gray-400',
            fairy: 'bg-pink-400',
            dark: 'bg-black',
            flying: 'bg-blue-400'
        };

        return typeColors[type] || 'bg-gray-300';
    };

    return (
        <div onClick={() => onCharSelected(id)}
            className={`bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105 cursor-pointer`}>
            <img src={image} alt={name} className="w-32 h-32 mx-auto mb-2" />
            <div className="text-center">
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="flex flex-wrap justify-center">
                    {types && types.map((type, index) => (
                        <small
                            key={index}
                            className={`ml-1 py-1 px-2 rounded-xl text-gray-600 ${getTypeBackground(type)}`}
                        >
                            {type}
                        </small>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharItem;
