import Layout from "../components/Layout";
import Pods from "../components/Pods";
import Header from "../components/Header";
import ExternalArrow from "../components/ExternalArrow";
import { Podcast } from "../components/Pods";
import { getSpotifyEpisodes, getSpotifyToken } from "../utils/spotifyAPI";

export const getStaticProps = async () => {
  const CLIENT_ID = "1f2b3fd8e5f9456784a516219a435cfa";
  const CLIENT_SECRET = "0e3e2d1089a14edf870bf79d35225ab7";

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
              className="text-neon-green font-bold hover:text-black"
              href="https://surfacetensionpod.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Surface Tension
              <ExternalArrow></ExternalArrow>
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
