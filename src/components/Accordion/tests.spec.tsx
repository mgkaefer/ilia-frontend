import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { PokemonCardsProvider } from "../../context/PokemonCardsContext";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  it("should render the search input", () => {
    render(
      <PokemonCardsProvider>
        <SearchInput />
      </PokemonCardsProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search for a Pokemon");
    expect(searchInput).toBeInTheDocument();
  });

  it("should update the search term when input changes", () => {
    const setSearchTerm = jest.fn();
    const mockContext = {
      searchTerm: "",
      setSearchTerm,
    };

    jest.spyOn(React, "useContext").mockReturnValue(mockContext);

    render(
      <PokemonCardsProvider>
        <SearchInput />
      </PokemonCardsProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search for a Pokemon");
    fireEvent.change(searchInput, {target: {value: "pikachu"}});

    expect(setSearchTerm).toHaveBeenCalledWith("pikachu");
  });
});
