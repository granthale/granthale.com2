import axios from "axios";

export const getSpotifyToken = async (clientId, clientSecret) => {
  try {
    const tokenResponse = await axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
    });

    return tokenResponse.data.access_token;
  } catch (error) {
    console.error("Error getting token: ", error);
    throw error;
  }
};

export const getSpotifyEpisodes = async (token) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/shows/1Q6JuUv6QxYgR12C67EPYb/episodes?market=US&limit=50&offset=0",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("Error getting episodes: ", error);
    throw error;
  }
};
