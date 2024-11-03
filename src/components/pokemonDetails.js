import React from 'react';

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonDetails = ({ pokemonData }) => {
    if (!pokemonData) return null;
  
    return (
      <div>
        <h3>{capitalize(pokemonData.name)} (ID: {pokemonData.id})</h3>
        <img src={pokemonData.image} alt={pokemonData.name} />
        <p>Type: {pokemonData.type.map(capitalize).join(', ')}</p>
        <p>Abilities: {pokemonData.abilities.map(capitalize).join(', ')}</p>
        <h4>Stats:</h4>
        <ul>
          {pokemonData.stats.map((stat) => (
            <li key={stat.name}>
              {capitalize(stat.name)}: {stat.baseStat}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PokemonDetails;