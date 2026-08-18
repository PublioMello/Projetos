import React from "react";
import "./Head.css";

function Head() {
  return (
    <header className="head">
      <div className="head__brand">
        <span className="head__logo" aria-hidden="true">
          🔎
        </span>
        <span>SearchX</span>
      </div>

      <div className="head__description">
        <h1 className="head__title">Find anyone in seconds</h1>
        <p className="head__subtitle">
          Search public records by name, phone, or email — completely free, no
          sign-up required.
        </p>
      </div>
    </header>
  );
}

export default Head;
