import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }, []);

  return (
    <div>
      <div className="pokepage__button">
        <button>previous pokemon</button>
        <button>next pokemon</button>
      </div>
      <div>
        <p>bulbassaur</p>
        <p>0001</p>
      </div>
      <div>
        <img src="" alt="pokemon image" />
      </div>
      <div>
        <p>stats</p>
        <ul>
          <li>PS</li>
          <li>Atack</li>
          <li>Deffense</li>
          <li>Special Attack</li>
          <li>Special Deffense</li>
          <li>Agility</li>
        </ul>
      </div>
      <div>
        <p>Details</p>
        <ul>
          Details
          <li>Height</li>
          <li>Weight</li>
          <li>Sex</li>
          <li>Category</li>
          <li>Hability</li>
        </ul>
      </div>
      <div>
        <p>Type</p>
        <ul>
          <li>Type 1</li>
          <li>type 2</li>
        </ul>
      </div>
      <div>
        <p>Weakness</p>
        <ul>
          <li>weak 1</li>
          <li>weak 2</li>
          <li>weak 3</li>
          <li>weak 4</li>
        </ul>
      </div>
    </div>
  );
}

export default PokemonPage;
