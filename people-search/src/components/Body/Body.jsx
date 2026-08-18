import React, { useState } from "react";
import "./Body.css";
import Card from "../Card/Card";

function Body() {
  //Vai ser usado para aPI
  const [users, setUsers] = useState([]);
  // vai ser usado pra pesquisa
  const [search, setsearch] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
      );

      if (!response.ok) {
        throw new Error("Data not found");
      }

      const data = await response.json();

      const results = data.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase()),
      );

      setUsers(results);

      if (results.length === 0) {
        setError("Nenhum usuário encontrado.");
      } else {
        setError("");
      }

      setsearch("");
    } catch (err) {
      setUsers([]);
      setError("Erro ao buscar usuários. Tente novamente.");
    }
  };

  return (
    <main className="body">
      <form className="body__search" onSubmit={handleSubmit} role="search">
        <input
          type="search"
          className="body__input"
          placeholder="Enter a full name..."
          value={search}
          onChange={(event) => setsearch(event.target.value)}
          aria-label="Search for a person"
        />
        <button type="submit" className="body__button">
          Search
        </button>
      </form>

      <ul className="body__trust">
        <li>100% free</li>
        <li>No credit card</li>
        <li>Results in seconds</li>
      </ul>
      {users &&
        users.map((u) => (
          <Card
            userName={u.username}
            name={u.name}
            email={u.email}
            address={`${u.address?.street}, ${u.address?.suite} - ${u.address?.city}`}
            phone={u.phone}
            company={u.company?.name}
          />
        ))}
      {error && <p className="body__error">{error}</p>}
    </main>
  );
}

export default Body;
