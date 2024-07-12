import { fireEvent, render } from "@testing-library/react";
import { PokemonCardsProvider } from "../../context/PokemonCardsContext";
import SearchInput from "./index";

describe("SearchInput", () => {
  it("should render the search input", () => {
    const {getByPlaceholderText} = render(
      <PokemonCardsProvider>
        <SearchInput />
      </PokemonCardsProvider>
    );
    const searchInput = getByPlaceholderText("Search for a Pokemon");
    expect(searchInput).toBeInTheDocument();
  });

  it("should update the search term when input changes", () => {
    const {getByPlaceholderText} = render(
      <PokemonCardsProvider>
        <SearchInput />
      </PokemonCardsProvider>
    );
    const searchInput = getByPlaceholderText("Search for a Pokemon");
    fireEvent.change(searchInput, {target: {value: "pikachu"}});
    expect(searchInput).toHaveValue("pikachu");
  });

  it("should clear the search term when input is empty", () => {
    const {getByPlaceholderText} = render(
      <PokemonCardsProvider>
        <SearchInput />
      </PokemonCardsProvider>
    );
    const searchInput = getByPlaceholderText("Search for a Pokemon");
    fireEvent.change(searchInput, {target: {value: "pikachu"}});
    expect(searchInput).toHaveValue("pikachu");
    fireEvent.change(searchInput, {target: {value: ""}});
    expect(searchInput).toHaveValue("");
  });
});
