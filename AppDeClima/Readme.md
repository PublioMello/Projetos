# App de Clima

Interface convertida para React com Vite. A lógica de busca de clima continua propositalmente sem implementação.

## O que já está pronto
- Layout completo (busca, loading, erro e card de clima)
- Componente visual em `src/App.jsx`
- Estilos em `src/index.css`

## Executar

```bash
npm install
npm run dev
```

## APIs sugeridas (gratuitas, sem chave)
- Geocoding: `https://geocoding-api.open-meteo.com/v1/search?name=CIDADE&count=1&language=pt`
- Clima: `https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true`

## Build de produção

```bash
npm run build
```
