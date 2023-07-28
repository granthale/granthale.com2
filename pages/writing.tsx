import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";

export default function Writing() {
  const sidebar = (
    <div className="text-tealish text-3xl font-bold">Writing</div>
  );
  const pieces = [
    {
      title: "The European Experiment",
      link: "https://treetoforest.substack.com/p/the-european-experiment",
    },
  ];
  const main_color = "text-neon-green";
  return (
    <>
      <Head>
        <title>writing | grant hale</title>
        <meta
          name="twitter:card"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/dot.png`}
        />
      </Head>
      <Layout sidebar={sidebar}>
        <h1 className={`font-bold ${main_color} text-3xl`}>writing!</h1>
        <h3 className="text-gray text-xl">
          I write for clarity and I write to explore. Subscribe to{" "}
          <Link
            className="underline text-primary hover:text-neon-green"
            href="https://treetoforest.substack.com/"
          >
            Tree to Forest
          </Link>{" "}
          and get ready for more!
        </h3>
        <br />
        <br />
        <h3 className={`font-bold text-gray text-2xl`}>pieces</h3>
        <ul className="list-disc pl-5 text-xl">
          {pieces.map((piece) => (
            <Link
              href={piece.link}
              className={`${main_color} underline hover:text-primary`}
            >
              <li>{piece.title}</li>
            </Link>
          ))}
        </ul>
      </Layout>
    </>
  );
}
