// ==========================================
// APIs sugeridas (gratuitas, sem precisar de chave)
// ==========================================
// Geocoding (nome da cidade -> latitude/longitude):
//   https://geocoding-api.open-meteo.com/v1/search?name=CIDADE&count=1&language=pt
//
// Clima atual (latitude/longitude -> clima):
//   https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true&hourly=relativehumidity_2m

// ==========================================
// REFERÊNCIAS DO DOM (já prontas)
// ==========================================
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const weatherCard = document.getElementById("weather-card");

const cityNameEl = document.getElementById("city-name");
const weatherDescriptionEl = document.getElementById("weather-description");
const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");

// ==========================================
// FUNÇÕES — implemente a lógica aqui
// ==========================================

function showLoading(isLoading) {
  // TODO: mostrar/esconder `loadingEl` (adicionar/remover a classe "hidden")
}

function showError(message) {
  // TODO:
  // - esconder weatherCard
  // - mostrar errorEl com a mensagem recebida
}

function renderWeather(data) {
  // TODO:
  // - esconder errorEl
  // - preencher cityNameEl, weatherDescriptionEl, temperatureEl, humidityEl, windEl
  //   com os dados recebidos da API
  // - mostrar weatherCard (remover a classe "hidden")
}

async function fetchWeather(city) {
  // TODO:
  // 1. Chamar showLoading(true)
  // 2. Buscar as coordenadas da cidade na API de geocoding (fetch + await)
  // 3. Se a cidade não for encontrada, chamar showError(...) e parar
  // 4. Com a latitude/longitude, buscar o clima atual na API de forecast
  // 5. Chamar renderWeather(...) passando os dados relevantes
  // 6. Tratar erros com try/catch e chamar showError(...) se algo falhar
  // 7. No fim (finally), chamar showLoading(false)
}

// ==========================================
// EVENTOS (já conectados)
// ==========================================
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  fetchWeather(city);
});
