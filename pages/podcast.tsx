import Link from "next/link";
import Layout from "../components/Layout";
import Pods from "../components/Pods";

const podcast = () => {
  return (
    <Layout>
      <div className="text-waving-brown font-extrabold text-4xl">podcast!</div>
      <br />
      <div className="text-gray text-xl">
        Sharad Doshi and I have been working on{" "}
        <Link
          className="underline hover:text-neon-green"
          href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
          target="_blank"
        >
          Surface Tension
        </Link>{" "}
        for a little under a year now. Here are the episodes that we've
        currently released.
      </div>
      <br />
      <br />
      <Pods />
    </Layout>
  );
};

export default podcast;
