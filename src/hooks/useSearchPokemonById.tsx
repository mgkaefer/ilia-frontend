import { useEffect, useState } from "react";
import getPokemonById from "../api/getPokemonById";
import { PokemonDetails } from "../interfaces/PokemonDetails";

const useFetchPokemonById = (id: string | undefined) => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemonById(id);

        setPokemon(pokemonData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {pokemon, isLoading, isError};
};

export default useFetchPokemonById;
