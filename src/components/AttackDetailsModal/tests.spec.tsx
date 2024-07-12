import { fireEvent, render, screen } from "@testing-library/react";
import {
  PokemonCardsProvider,
  usePokemonCardsContext,
} from "../../context/PokemonCardsContext";
import SearchInput from "../SearchInput";

jest.mock("../../context/PokemonCards", () => ({
  usePokemonCardsContext: jest.fn(),
}));

describe("SearchInput", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the search input", () => {
    const mockContext = {
      searchTerm: "",
      setSearchTerm: jest.fn(),
    };
    (usePokemonCardsContext as jest.Mock).mockReturnValue(mockContext);

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
    (usePokemonCardsContext as jest.Mock).mockReturnValue(mockContext);

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
