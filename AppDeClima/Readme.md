# App de Clima

Estrutura pronta (HTML + CSS). Falta a lógica em `script.js`.

## O que já está pronto
- Layout completo (busca, loading, erro, card de clima)
- Referências do DOM e evento de submit do formulário já conectado
- URLs das APIs gratuitas sugeridas (Open-Meteo, sem necessidade de chave)

## O que você precisa implementar (em `script.js`)
1. `showLoading(isLoading)` — mostrar/esconder o texto de carregamento
2. `showError(message)` — mostrar mensagem de erro e esconder o card
3. `renderWeather(data)` — preencher o card com os dados do clima
4. `fetchWeather(city)` — a função principal:
   - buscar as coordenadas da cidade (geocoding)
   - buscar o clima atual com essas coordenadas
   - tratar loading e erros

## APIs sugeridas (gratuitas, sem chave)
- Geocoding: `https://geocoding-api.open-meteo.com/v1/search?name=CIDADE&count=1&language=pt`
- Clima: `https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true`

## Como testar
Abra o `index.html` no navegador (ou use a extensão Live Server) — precisa de internet para os fetch funcionarem.
