import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout>
        <div className="text-primary text-xl">
          <p className="font-bold text-2xl">👋 Hi,I'm Grant!</p>
          <br />
          <p>
            i believe that everyone has more room for{" "}
            <span className="font-bold">curiosity and creativity</span>. i’m
            living to broaden those qualities in myself and help others do the
            same.
          </p>
          <br />
          <ul className="list-disc text-gray pl-5 text-xl">
            <li>
              i’m asking questions on{" "}
              <Link
                className="underline hover:text-neon-green"
                href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
                target="_blank"
              >
                surface tension
              </Link>{" "}
              to get to the bottom of worthwhile ideas.
            </li>
            <li>
              i’m traveling the world, searching for{" "}
              <Link className="underline hover:text-neon-green" href="/writing">
                perspective
              </Link>{" "}
              on society, people, and myself.
            </li>
            <li>
              i’m exploring disparate fields and problems in the hopes of
              finding ways to make the world a better place.
            </li>
          </ul>
          <br />
          <p>
            click around to get to know me and reach out if you'd like to
            connect!
          </p>
        </div>
      </Layout>
    </>
  );
}
