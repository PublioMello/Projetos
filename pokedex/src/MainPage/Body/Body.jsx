import React, { useState } from "react";
import Card from "../../components/Card/Card.jsx";
import "./Body.css";

function Body() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  async function searchPokemon(event) {
    event.preventDefault();

    const value = search.trim();
    if (!value) {
      setError("Digite o nome de um Pokémon para pesquisar.");
      setPokemon(null);
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`,
      );

      if (!response.ok) {
        throw new Error("Pokémon não encontrado");
      }

      const data = await response.json();
      setPokemon(data);
      setError("");
      setSearch("");
    } catch (err) {
      setPokemon(null);
      setError("Pokémon não encontrado. Tente outro nome.");
    }
  }

  return (
    <main className="page-shell">
      <section className="search-panel">
        <p className="eyebrow">Pokédex</p>
        <h1>Encontre seu Pokémon favorito</h1>

        <form className="search-form" onSubmit={searchPokemon}>
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite um Pokémon"
            aria-label="Buscar pokémon"
          />
          <button className="search-button" type="submit">
            Buscar
          </button>
        </form>

        {error && <p className="search-error">{error}</p>}
      </section>

      <section className="result-panel">
        {pokemon ? (
          <Card
            image={pokemon.sprites.other["official-artwork"].front_default}
            name={pokemon.name}
            type1={pokemon.types[0]?.type.name}
            type2={pokemon.types[1]?.type.name}
            number={pokemon.id}
          />
        ) : (
          <div className="empty-state">
            Pesquise pelo nome de um Pokémon e veja os detalhes aparecerem aqui.
          </div>
        )}
      </section>
    </main>
  );
}

export default Body;
