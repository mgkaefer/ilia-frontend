import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonCards } from "./components/PokemonCards";
import PokemonDetailsPage from "./components/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonCards />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
