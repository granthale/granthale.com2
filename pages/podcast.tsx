import Layout from "../components/Layout";
import Pods from "../components/Pods";
import Header from "../components/Header";
import Arrow from "../components/Arrow";

const podcast = () => {
  return (
    <>
      <Header page="podcast" />
      <Layout>
        <div className="text-neon-green font-extrabold text-4xl">podcast!</div>
        <br />
        <div className="text-xl">
          Sharad Doshi and I have been working on{" "}
          <a
            className="text-neon-green underline hover:text-black"
            href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
            target="_blank"
          >
            Surface Tension
            <Arrow></Arrow>
          </a>{" "}
          for a little under a year now. Here are the episodes that we've
          currently released.
        </div>
        <br />
        <br />
        <Pods />
      </Layout>
    </>
  );
};

export default podcast;
