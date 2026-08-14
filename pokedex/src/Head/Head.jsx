import React from "react";
import pokemonLogo from "../assets/pokemon2.png";
import "./head.css";

const Head = () => {
  return (
    <div className="head">
      <div className="head__left">
        <img src={pokemonLogo} alt="Logo do pokemon" className="head-logo" />
        {/* <h1> Pokemon</h1> */}
      </div>
      <div className="head__right">
        <ul>
          Tipo
          <li>Fogo</li>
          <li>Palnta</li>
          <li>Inseto</li>
          <li>Agua</li>
        </ul>
        <ul>
          Jogos
          <li>Red</li>
          <li>Yellow</li>
          <li>Silver</li>
          <li>Saphire</li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
