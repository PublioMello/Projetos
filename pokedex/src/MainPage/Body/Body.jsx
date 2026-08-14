import React, { useState } from "react";

function Body() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadPokemon = async () => {
    setLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${offset}`,
    );

    const data = await response.json();

    setPokemon((prev) => [...prev, ...data.results]);
    setOffset((prev) => prev + 8);

    setLoading(false);
  };
  return (
    <>
      <button onClick={loadPokemon} disabled={loading}>
        {loading ? "Carregando..." : "Carregar mais"}
      </button>
    </>
  );
}

export default Body;
