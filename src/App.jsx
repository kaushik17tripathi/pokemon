import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return await res.json();
      })
    );

    setPokemons(pokemonDetails);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const openPokemonCard = (pokemon) => {
    document.body.style.overflow = 'hidden'; 
    setSelectedPokemon(pokemon);
  };

  const closePokemonCard = () => {
    document.body.style.overflow = 'auto'; 
    setSelectedPokemon(null);
  };

  return (
    <div className="bg-gradient-to-b from-yellow-400 to-orange-500 min-h-screen p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-white">
        Pokémon Gallery
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search Pokémon"
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            onClick={() => openPokemonCard(pokemon)}
            className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105 hover:bg-yellow-50 cursor-pointer"
          >
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              className="w-full h-40 object-contain"
            />
            <h3 className="text-xl font-bold capitalize mt-2 text-gray-800">
              {pokemon.name}
            </h3>
          </div>
        ))}
      </div>

      {selectedPokemon && (
        <PokemonCard pokemon={selectedPokemon} onClose={closePokemonCard} />
      )}
    </div>
  );
}

export default App;
