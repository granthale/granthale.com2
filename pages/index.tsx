import Layout from "../components/Layout";
import Header from "../components/Header";
import Arrow from "../components/arrow";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="text-xl text-primary">
          <p className="font-extrabold text-4xl">👋 Hi,I'm Grant!</p>
          <br />
          <p className="text-neon-green">
            I believe that everyone has more room for{" "}
            <span className="font-bold">curiosity and creativity</span>. I’m
            living to broaden those qualities in myself and help others do the
            same.
          </p>
          <br />
          <ul className="list-disc text-black pl-5 text-xl">
            <li key="podcast">
              I’m asking questions on{" "}
              <a
                className="underline hover:text-neon-green"
                href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
                target="_blank"
              >
                Surface Tension
                <Arrow></Arrow>
                </a>
            </li>
            <li key="travel">
              I’m traveling the world, looking for perspective on society and
              self
            </li>
            <li key="learning">
              I’m learning about different fields to find problems worth
              solving
            </li>
          </ul>
          <br />
          <p className="text-neon-green">
            Click around to get to know me and don't be a stranger!
          </p>
        </div>
      </Layout>
    </>
  );
}
