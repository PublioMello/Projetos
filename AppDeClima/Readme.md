# App de Clima

Aplicação web em React que consulta o clima atual de uma cidade usando as APIs gratuitas da Open-Meteo.

## Funcionalidades

- Busca cidades pelo nome
- Exibe temperatura, umidade e velocidade do vento atuais
- Mostra o nome da cidade encontrada
- Informa quando a cidade não existe ou quando ocorre um erro na busca
- Exibe um indicador enquanto a requisição está em andamento

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- [Open-Meteo Forecast API](https://open-meteo.com/en/docs)

## Como executar

1. Clone este repositório ou abra a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço exibido no terminal.

## Como funciona

Quando uma cidade é pesquisada, a aplicação faz duas requisições:

1. A API de geocoding recebe o nome da cidade e retorna sua latitude e longitude.
2. A API de previsão usa essas coordenadas para retornar os dados atuais de temperatura, umidade e vento.

Os dados são armazenados no estado do React e renderizados no card de clima.

## Estrutura do projeto

```text
.
├── src/
│   ├── App.jsx       # Componente principal e busca das APIs
│   ├── index.css     # Estilos da interface
│   └── main.jsx      # Ponto de entrada do React
├── index.html
├── package.json
└── vite.config.js
```

## Build de produção

Para gerar os arquivos otimizados para publicação:

```bash
npm run build
```

Os arquivos serão criados na pasta `dist/`.
