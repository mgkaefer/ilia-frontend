import api from "./api";

const getPokemonById = async (id: string | undefined) => {
  try {
    const pokemon = await api.get(`/cards/${id}`);
    return pokemon?.data;
  } catch (error) {
    console.error("Error fetching Pokemon by ID:", error);
    throw error;
  }
};

export default getPokemonById;
