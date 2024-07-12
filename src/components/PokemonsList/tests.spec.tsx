import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PokemonCards } from "../PokemonCards";

describe("PokemonCards", () => {
  test("renders Pokemon App title", () => {
    render(<PokemonCards />);
    const titleElement = screen.getByText(/Pokemon App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders SearchInput component", () => {
    render(<PokemonCards />);
    const searchInputElement =
      screen.getByPlaceholderText(/Search for a Pokemon/i);
    expect(searchInputElement).toBeInTheDocument();
  });

  test("renders PokemonsList component", () => {
    render(<PokemonCards />);
    const pokemonsListElement = screen.getByText(/Loading.../i);
    expect(pokemonsListElement).toBeInTheDocument();
  });

  test("sticky header behavior", () => {
    render(<PokemonCards />);
    const titleElement = screen.getByText(/Pokemon App/i);
    const searchInputElement =
      screen.getByPlaceholderText(/Search for a Pokemon/i);

    // Initially, the header should not be sticky
    expect(titleElement).not.toHaveClass("sticky");
    expect(searchInputElement).not.toHaveClass("sticky");

    // Simulate scrolling down
    window.dispatchEvent(new Event("scroll"));

    // After scrolling down, the header should become sticky
    expect(titleElement).toHaveClass("sticky");
    expect(searchInputElement).toHaveClass("sticky");
  });

  test("search input updates search term", async () => {
    render(<PokemonCards />);
    const searchInputElement =
      screen.getByPlaceholderText(/Search for a Pokemon/i);

    // Simulate typing in the search input
    await userEvent.type(searchInputElement, "pikachu");

    // Check if the search term is updated correctly
    expect(searchInputElement).toHaveValue("pikachu");
  });
});
