import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PokemonCardsProvider } from "../../context/PokemonCardsContext";
import { PokemonCards } from "./index";

describe("PokemonCards", () => {
  test("renders Pokemon Cards title", () => {
    render(
      <Router>
        <PokemonCardsProvider>
          <PokemonCards />
        </PokemonCardsProvider>
      </Router>
    );

    const titleElement = screen.getByText("Pokemon Cards");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders SearchInput component", () => {
    render(
      <Router>
        <PokemonCardsProvider>
          <PokemonCards />
        </PokemonCardsProvider>
      </Router>
    );

    const searchInputElement = screen.getByPlaceholderText(
      "Search for a Pokemon"
    );
    expect(searchInputElement).toBeInTheDocument();
  });

  test("renders PokemonsList component", async () => {
    render(
      <Router>
        <PokemonCardsProvider>
          <PokemonCards />
        </PokemonCardsProvider>
      </Router>
    );

    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();

    // Wait for the PokemonsList component to render
    await waitFor(() => {
      const pokemonCardElement = screen.getByText("Pikachu");
      expect(pokemonCardElement).toBeInTheDocument();
    });
  });

  test("toggles sticky state on scroll", async () => {
    render(
      <Router>
        <PokemonCardsProvider>
          <PokemonCards />
        </PokemonCardsProvider>
      </Router>
    );

    // Wait for the PokemonsList component to render
    await waitFor(() => {
      const pokemonCardElement = screen.getByText("Pikachu");
      expect(pokemonCardElement).toBeInTheDocument();
    });

    // Simulate scroll event
    window.dispatchEvent(new Event("scroll"));

    // Check if the sticky state is updated
    const stickySearchInput = screen.getByPlaceholderText(
      "Search for a Pokemon"
    );
    expect(stickySearchInput).toHaveClass("sticky");
  });
});
