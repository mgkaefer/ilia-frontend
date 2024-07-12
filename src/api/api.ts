const api = (baseUrl: string | undefined) => {
  const makeRequest = async (endpoint: string, options: RequestInit = {}) => {
    const url = `${baseUrl}${endpoint}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error making API request:", error);
      throw error;
    }
  };

  return {
    get: (endpoint: string, options: RequestInit = {}) =>
      makeRequest(endpoint, {...options, method: "GET"}),
    // Here we could have the other request types, like:
    // post: (endpoint: string, body: any, options: RequestInit = {}) => {},
    // put: (endpoint: string, body: any, options: RequestInit = {}) => {},
    // delete: (endpoint: string, options: RequestInit = {}) => {},
    // ...
  };
};

export default api(process.env.REACT_APP_API_BASE_URL);
