import api from "./api";

const getPokemonCardsByName = async (searchTerm: string, page: number = 1) => {
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

export default getPokemonCardsByName;
