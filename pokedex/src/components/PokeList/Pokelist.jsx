import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";

function Pokelist() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=8&offset=0",
      );

      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        }),
      );
    }
    setPokemon(pokemonDetails);

    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemon.map((poke) => (
        <Card
          name={poke.name}
          // number={poke.id}
          // image={poke.sprites.front_default}
          type={poke.types[0].type.name}
        />
      ))}
    </div>
  );
}

export default Pokelist;
