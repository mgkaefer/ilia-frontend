import api from "./api";

const getAllPokemonCards = async (page: number = 1) => {
  try {
    const response = await api.get(
      `/cards?page=${page}&pageSize=20&orderBy=name,types`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all Pokemon cards:", error);
    throw error;
  }
};

export default getAllPokemonCards;
