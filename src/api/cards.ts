import api from "./api";

export const getAllPokemonCards = async (page: number = 1) => {
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

export const getPokemonById = async (id: string | undefined) => {
  try {
    const pokemon = await api.get(`/cards/${id}`);
    return pokemon?.data;
  } catch (error) {
    console.error("Error fetching Pokemon by ID:", error);
    throw error;
  }
};

export const getPokemonCardsByName = async (
  searchTerm: string,
  page: number = 1
) => {
  try {
    const response = await api.get(
      `/cards?${
        searchTerm ? `q=name:*${searchTerm}*&` : ""
      }orderBy=name&pageSize=100&page=${page}`
    );

    console.log(`>>>>>>>>>> response: ${JSON.stringify(response)}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};
