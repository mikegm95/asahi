export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${endpoint}`, {
      // Prepend '/api' to the endpoint
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }).then((data) => data);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};
