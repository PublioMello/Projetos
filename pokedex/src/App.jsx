import React from "react";
import Head from "./Head/Head.jsx";
import Body from "./MainPage/Body/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonPage from "./components/PokemonPage/PokemonPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
