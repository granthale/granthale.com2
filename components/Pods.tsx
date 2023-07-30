import { useEffect, useState } from "react";
import axios from "axios";
import PodCard from "./PodCard";

export interface Podcast {
  id: number;
  name: string;
  audio_preview_url: string;
  external_urls: ExternalUrls;
  release_date: string;
  description: string;
}

interface ExternalUrls {
  spotify: string;
}

interface FetchPodsResponse {
  count: number;
  results: Podcast[];
}

interface FetchTokenResponse {
  token: string;
}

const Pods = () => {
  const [pods, setPods] = useState<Podcast[]>([]);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const CLIENT_ID = "1f2b3fd8e5f9456784a516219a435cfa";
  const CLIENT_SECRET = "0e3e2d1089a14edf870bf79d35225ab7";

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "https://accounts.spotify.com/api/token",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
          },
          data: "grant_type=client_credentials",
        });
        setToken(response.data.access_token);
      } catch (error) {
        console.error(error);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://api.spotify.com/v1/shows/1Q6JuUv6QxYgR12C67EPYb/episodes?market=US&limit=50&offset=0",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setPods(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    if (token) {
      fetchEpisodes();
    }
  }, [token]);

  return (
    <div>
      {pods.map((pod) => {
        return (
          <PodCard podcast={pod} />
        );
      })}
    </div>
  );
};

export default Pods;
