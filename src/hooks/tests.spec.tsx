/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import { getPokemonById } from "../api/cards";
import useFetchPokemonById from "./useSearchPokemonById";

jest.mock("../api/cards");

describe("useFetchPokemonById", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch Pokemon data successfully", async () => {
    const mockPokemonData = {
      id: "1",
      name: "Bulbasaur",
      // Add other properties as needed
    };
    (getPokemonById as jest.Mock).mockResolvedValueOnce(mockPokemonData);

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchPokemonById("1")
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.pokemon).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.pokemon).toEqual(mockPokemonData);
  });

  it("should handle error when fetching Pokemon data", async () => {
    const mockError = new Error("Failed to fetch Pokemon data");
    (getPokemonById as jest.Mock).mockRejectedValueOnce(mockError);

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchPokemonById("2")
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.pokemon).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
    expect(result.current.pokemon).toBeNull();
  });
});
