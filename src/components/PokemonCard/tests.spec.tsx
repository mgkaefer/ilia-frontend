import { renderHook } from "@testing-library/react-hooks";
import getPokemonById from "../../api/getPokemonById";
import useFetchPokemonById from "../../hooks/useSearchPokemonById";

jest.mock("../api/getPokemonById");

describe("useFetchPokemonById", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and set pokemon data correctly", async () => {
    const mockPokemonData = {
      images: {
        small: "https://example.com/small.png",
        large: "https://example.com/large.png",
      },
      name: "Pikachu",
      id: "25",
      types: ["Electric"],
      resistances: ["Fighting"],
      weaknesses: ["Ground"],
      attacks: [
        {
          name: "Thunder Shock",
          cost: ["Lightning", "Colorless"],
          convertedEnergyCost: 2,
          damage: "30",
          text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        },
      ],
    };

    (getPokemonById as jest.Mock).mockResolvedValueOnce(mockPokemonData);

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchPokemonById("25")
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.pokemon).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.pokemon).toEqual(mockPokemonData);
  });

  it("should handle error when fetching pokemon data", async () => {
    const mockError = new Error("Failed to fetch Pokemon data");
    (getPokemonById as jest.Mock).mockRejectedValueOnce(mockError);

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchPokemonById("25")
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
