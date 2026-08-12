import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();
  const [clime, setClime] = useState(null);

  async function searchClime(cityName) {
    try {
      const apiAnswer = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=pt`,
      );
      const data = await apiAnswer.json();

      console.log(data);
      const place = data.results[0];
      const latitude = place.latitude;
      const longitude = place.longitude;

      const cityClimeResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`,
      );
      const climeData = await cityClimeResponse.json();

      console.log(climeData);
    } catch (error) {
      setError("Nao foi possivel buscar cidade.");
    } finally {
      setLoad(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const cityName = city.trim();

    if (!city) {
      return;
    }
    setLoad(true);
    setClime(null);

    searchClime(cityName);
  }

  return (
    <main id="app">
      <h1>☀️ Clima</h1>

      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="city-input"
          placeholder="Digite uma cidade..."
          autoComplete="off"
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <p id="loading" className="hidden">
        Carregando...
      </p>
      <p id="error" className="hidden">
        Cidade não encontrada. Tente novamente.
      </p>

      <section id="weather-card" className="hidden">
        <h2 id="city-name">Nome da cidade</h2>
        <p id="weather-description">Descrição do tempo</p>
        <div id="temperature">--°C</div>
        <div id="extra-info">
          <span id="humidity">Umidade: --%</span>
          <span id="wind">Vento: -- km/h</span>
        </div>
      </section>
    </main>
  );
}

export default App;
