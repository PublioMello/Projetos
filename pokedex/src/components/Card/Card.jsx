import React from "react";
import "./Card.css";

function Card({ image, name, type, number }) {
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

      {/* <button onClick={searchPokemon}>procurar pookemon</button> */}
    </div>
  );
}

export default Card;
