import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="text-primary text-xl">
          <p className="font-extrabold text-4xl">👋 Hi,I'm Grant!</p>
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
              </Link>.
            </li>
            <li>
              i’m traveling the world, looking for perspective on society and
              self.
            </li>
            <li>
              i’m learning about different fields to find problems worth solving.
            </li>
          </ul>
          <br />
          <p>
            click around to get to know me and reach out to say hi!
          </p>
        </div>
      </Layout>
    </>
  );
}
