import Layout from "../components/Layout";
import Pods from "../components/Pods";
import Header from "../components/Header";
import Arrow from "../components/Arrow";
import { Podcast } from "../components/Pods";
import { getSpotifyEpisodes, getSpotifyToken } from "../utils/spotifyAPI";

export const getStaticProps = async () => {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

  try {
    const token = await getSpotifyToken(CLIENT_ID, CLIENT_SECRET);
    const pods = await getSpotifyEpisodes(token);

    return {
      props: { pods },
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
              href="https://surfacetensionpod.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Surface Tension
              <Arrow></Arrow>
            </a>{" "}
            focuses on making you more curious.{" "}
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
