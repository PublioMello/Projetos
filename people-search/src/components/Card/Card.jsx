import React from "react";
import "./Card.css";

function Card({ userName, name, email, address, phone, company }) {
  return (
    <div className="card">
      <div className="card__up">
        <p className="card__name">{name}</p>
        <p className="card__username">@{userName}</p>

        <ul className="card__details">
          <li>
            <span className="card__label">Email:</span> {email}
          </li>
          <li>
            <span className="card__label">Address:</span> {address}
          </li>
          <li>
            <span className="card__label">Phone Number:</span> {phone}
          </li>
          <li>
            <span className="card__label">Company:</span> {company}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
