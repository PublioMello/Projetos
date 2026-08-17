import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";

function Pokelist() {
  // Armazena todos os pokémons carregados da API
  const [pokemons, setPokemons] = useState([]);
  // Controla o estado de carregamento enquanto a API responde
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        // 1) Busca a lista inicial com todos os pokémons
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0",
        );

        const data = await response.json();

        // 2) Para cada item da lista, faz uma nova busca para pegar os detalhes
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const result = await fetch(pokemon.url);
            return result.json();
          }),
        );

        // 3) Ordena por número do Pokédex para ficar em ordem crescente
        const ordered = pokemonDetails.sort((a, b) => a.id - b.id);
        setPokemons(ordered);
      } catch (error) {
        console.error("Erro ao carregar os pokémon:", error);
      } finally {
        // 4) Mesmo com erro ou sucesso, para de mostrar "Carregando..."
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div className="poke-list">
      {loading ? (
        <p>Carregando Pokémon...</p>
      ) : (
        // Mapeia cada pokémon e renderiza um Card
        pokemons.map((poke) => (
          <Card
            key={poke.id}
            image={
              // Usa a imagem oficial do artwork, ou uma alternativa se não existir
              poke.sprites.other["official-artwork"].front_default ||
              poke.sprites.front_default
            }
            name={poke.name}
            type1={poke.types[0]?.type.name}
            type2={poke.types[1]?.type.name}
            number={poke.id}
          />
        ))
      )}
    </div>
  );
}

export default Pokelist;
