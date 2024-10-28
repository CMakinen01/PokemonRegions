import React, { useState } from 'react'; 
import Layout from '../components/layout';
import Seo from '../components/seo';


const pokemonDescriptions = {
    bulbasaur:"Bulbasaur is a Grass/Poison Type introduced in the Kanto region." ,
    charmander:"Charmander is a Fire Type introduced in the Kanto region.",
    squirtle:"Squirtle is a Water Type introduced in the Kanto region.",
    pikachu:"Pikachu is an Electric Type introduced in the Kanto (Specifically Yellow/Let's Go!) region.",
    eevee:"Eevee is a Normal Type introduced in the Kanto (Specifically Let's Go!) region.",

    chikorita:"Chikorita is a Grass Type introduced in the Johto region." ,
    cyndaquil:"Cyndaquil is a Fire Type introduced in the Johto, and later Hisui, region.",
    totodile:"Totodile is a Water Type introduced in the Johto region.",

    treecko:"Treecko is a Grass Type introduced in the Hoenn region." ,
    torchic:"Torchic is a Fire Type introduced in the Hoenn region.",
    mudkip:"Mudkip is a Water Type introduced in the Hoenn region.",

    turtwig:"Turtwig is a Grass Type introduced in the Sinnoh region." ,
    chimchar:"Chimchar is a Fire Type introduced in the Sinnoh region.",
    piplup:"Piplup is a Water Type introduced in the Sinnoh region.",

    snivy:"Snivy is a Grass Type introduced in the Unova region." ,
    tepig:"Tepig is a Fire Type introduced in the Unova region.",
    oshawott:"Oshawott is a Water Type introduced in the Unova, and later Hisui, region.",

    chespin:"Chespin is a Grass Type introduced in the Kalos region." ,
    fennekin:"Fennekin is a Fire Type introduced in the Kalos region.",
    froakie:"Froakie is a Water Type introduced in the Kalos region.",

    rowlet:"Rowlet is a Grass Type introduced in the Alola, and later Hisui, region." ,
    litten:"Litten is a Fire Type introduced in the Alola region.",
    popplio:"Poplio is a Water Type introduced in the Alola region.",

    grookey:"Grookey is a Grass Type introduced in the Galar region." ,
    scorbunny:"Scorbunny is a Fire Type introduced in the Galar region.",
    sobble:"Sobble is a Water Type introduced in the Galar region.",

    sprigatito:"Sprigatito is a Grass Type introduced in the Paldea region." ,
    fuecoco:"Fuecoco is a Fire Type introduced in the Paldea region.",
    quaxly:"Quaxly is a Water Type introduced in the Paldea region.",
}


const LookupPage = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonDescription, setPokemonDescription] = useState('');

  const handleSelection = (event) => {
    const selected = event.target.value;
    setSelectedPokemon(selected);

    if (selected) {
      const imageUrl = `https://img.pokemondb.net/artwork/large/${selected.toLowerCase()}.jpg`;
      setPokemonImage(imageUrl);

      const description = pokemonDescriptions[selected.toLowerCase()] || 'Description not available.';
      setPokemonDescription(description);
    } else {
      setPokemonImage('');
      setPokemonDescription('');
    }
  };

  return (
    <Layout pageTitle="Lookup any Starter Pokemon">
      <p>Use the dropdown below to pull up info on any starter Pokemon!</p>
    
      <select onChange={handleSelection} value={selectedPokemon}>
        <option value="">Select a Starter</option>
        <option value="Bulbasaur">Bulbasaur</option>
        <option value="Charmander">Charmander</option>
        <option value="Squirtle">Squirtle</option>
        <option value="Pikachu">Pikachu</option>
        <option value="Eevee">Eevee</option>
        <option value="Chikorita">Chikorita</option>
        <option value="Cyndaquil">Cyndaquil</option>
        <option value="Totodile">Totodile</option>
        <option value="Treecko">Treecko</option>
        <option value="Torchic">Torchic</option>
        <option value="Mudkip">Mudkip</option>
        <option value="Turtwig">Turtwig</option>
        <option value="Chimchar">Chimchar</option>
        <option value="Piplup">Piplup</option>
        <option value="Snivy">Snivy</option>
        <option value="Tepig">Tepig</option>
        <option value="Oshawott">Oshawott</option>
        <option value="Chespin">Chespin</option>
        <option value="Fennekin">Fennekin</option>
        <option value="Froakie">Froakie</option>
        <option value="Rowlet">Rowlet</option>
        <option value="Litten">Litten</option>
        <option value="Popplio">Popplio</option>
        <option value="Grookey">Grookey</option>
        <option value="Scorbunny">Scorbunny</option>
        <option value="Sobble">Sobble</option>
        <option value="Sprigatito">Sprigatito</option>
        <option value="Fuecoco">Fuecoco</option>
        <option value="Quaxly">Quaxly</option>
      </select>

      {selectedPokemon && (
        <div>
          <h2>Selected Pokemon: {selectedPokemon}</h2>
          {pokemonImage && <img src={pokemonImage} alt={selectedPokemon} style={{ width: '150px', height: 'auto' }} />}
          {pokemonDescription && <p>{pokemonDescription}</p>}
        </div>
      )}
    </Layout>
  );
};

export const Head = () => <Seo title="Lookup Page" />;

export default LookupPage;
