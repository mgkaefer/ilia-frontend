import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import getAllPokemonCards from "../api/getAllPokemonCards";
import getPokemonCardsByName from "../api/getPokemonCardsByName";
import { PokemonCardsContext, PokemonCardsProvider } from "./PokemonCardsContext";

jest.mock("../api/getAllPokemonCards");
jest.mock("../api/getPokemonCardsByName");

describe("PokemonCardsProvider", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and set cards correctly on initial render", async () => {
    const mockCards = [
      {
        id: "1",
        name: "Pikachu",
        images: {
          small: "https://example.com/small.png",
          large: "https://example.com/large.png",
        },
        types: ["Electric"],
      },
      {
        id: "2",
        name: "Charizard",
        images: {
          small: "https://example.com/small.png",
          large: "https://example.com/large.png",
        },
        types: ["Fire", "Flying"],
      },
    ];

    (getAllPokemonCards as jest.Mock).mockResolvedValueOnce(mockCards);

    const TestComponent = () => {
      const {cards} = React.useContext(PokemonCardsContext);
      return <div>{cards.map((card) => card.name)}</div>;
    };

    render(
      <PokemonCardsProvider>
        <TestComponent />
      </PokemonCardsProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Pikachu")).toBeInTheDocument();
      expect(screen.getByText("Charizard")).toBeInTheDocument();
    });
  });

  it("should fetch and set cards correctly when searching by name", async () => {
    const mockCards = [
      {
        id: "1",
        name: "Pikachu",
        images: {
          small: "https://example.com/small.png",
          large: "https://example.com/large.png",
        },
        types: ["Electric"],
      },
    ];

    (getPokemonCardsByName as jest.Mock).mockResolvedValueOnce(mockCards);

    const TestComponent = () => {
      const {cards, setSearchTerm} = React.useContext(PokemonCardsContext);
      return (
        <div>
          <input
            type="text"
            data-testid="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {cards.map((card) => card.name)}
        </div>
      );
    };

    render(
      <PokemonCardsProvider>
        <TestComponent />
      </PokemonCardsProvider>
    );

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, {target: {value: "pikachu"}});

    await waitFor(() => {
      expect(screen.getByText("Pikachu")).toBeInTheDocument();
    });
  });
});
