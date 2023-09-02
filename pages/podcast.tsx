import Layout from "../components/Layout";
import Pods from "../components/Pods";
import Header from "../components/Header";
import Arrow from "../components/Arrow";
import axios from "axios";
import { Podcast } from "../components/Pods";

export const getStaticProps = async () => {
  const CLIENT_ID = "1f2b3fd8e5f9456784a516219a435cfa";
  const CLIENT_SECRET = "0e3e2d1089a14edf870bf79d35225ab7";

  try {
    const tokenResponse = await axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
    });

    const token = tokenResponse.data.access_token;

    const response = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/shows/1Q6JuUv6QxYgR12C67EPYb/episodes?market=US&limit=50&offset=0",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return {
      props: { pods: response.data.items }, // will be passed to the page component as props
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

const podcast = ({ pods }: { pods: Podcast[] }) => {
  return (
    <>
      <Header page="podcast" />
      <Layout>
        <div className="text-neon-green font-extrabold text-4xl">podcast!</div>
        <br />
        <div className="text-xl">
          <span className="font-bold">
            <a
              className="text-neon-green underline hover:text-black"
              href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
              target="_blank"
              rel="noopener noreferrer"
            >
              Surface Tension
              <Arrow></Arrow>
            </a>{" "}
            helps us stay curious.{" "}
          </span>
          We interview creators, academics, and entrepreneurs to expose you to
          thought-provoking ideas.
        </div>
        <br />
        <div className="text-xl">
          Sharad Doshi and I have been working on the podcast for a little under
          a year now. Here are the episodes that we've currently released.
        </div>
        <br />
        <br />
        <Pods pods={pods} />
      </Layout>
    </>
  );
};

export default podcast;
