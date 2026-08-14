import React from "react";
import "./Card.css";
import charizard from "../assets/charizard.png";

function Card({ image, name, type, number }) {
  async function searchPokemon(pokemonName) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const pokemopnData = await pokemon.json();
    console.log(pokemopnData);
  }

  return (
    <div className="card">
      <div className="card__up">
        <img
          src={image}
          alt="Picture of the pokemon"
          className="card__up-image"
        />
        <p>{number}</p>
      </div>
      <div className="card__down">
        <p className="card__down-name">{name}</p>
        <div className="card__down-types">
          <li className="card__down-types-1">{type}</li>
          <li className="card__down-types-2">{type}</li>
        </div>
      </div>
      {/* aqui tem que ser uma lista e pegar os tipos da api */}

      {/* <button onClick={searchPokemon}>procurar pookemon</button> */}
    </div>
  );
}

export default Card;
