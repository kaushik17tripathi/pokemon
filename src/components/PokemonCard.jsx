import React from 'react';

const PokemonCard = ({ pokemon, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg border border-gray-200 shadow-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✖
        </button>
        
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="w-full h-48 object-contain mb-4 rounded-lg"
        />
        <h3 className="text-2xl font-extrabold capitalize text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          {pokemon.name}
        </h3>
        <hr className="my-4 border-t-2 border-yellow-500" />

        {/* Abilities */}
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-indigo-600">Abilities</h4>
          <ul className="flex justify-center space-x-2">
            {pokemon.abilities.map((ability, index) => (
              <li
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium capitalize"
              >
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Types */}
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-indigo-600">Types</h4>
          <ul className="flex justify-center space-x-2">
            {pokemon.types.map((type, index) => (
              <li
                key={index}
                className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm font-medium capitalize"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-indigo-600">Base Experience</h4>
          <p className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md text-sm font-semibold">
            {pokemon.base_experience} XP
          </p>
        </div>

        {/* Height & Weight */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-red-100 text-red-700 rounded-lg p-2">
            <p className="font-semibold">Height</p>
            <p>{pokemon.height / 10} m</p>
          </div>
          <div className="bg-blue-100 text-blue-700 rounded-lg p-2">
            <p className="font-semibold">Weight</p>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
