import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Writing() {
  const pieces = [
    {
      title: "The European Experiment",
      link: "https://treetoforest.substack.com/p/the-european-experiment",
    },
  ];
  const main_color = "text-neon-green";
  return (
    <>
      <Header page="Writing" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>writing!</h1>
        <br />
        <h3 className="text-gray text-xl">
          I write for clarity and I write to explore. Subscribe to{" "}
          <Link
            className="underline text-primary hover:text-neon-green"
            href="https://treetoforest.substack.com/"
          >
            Tree to Forest
          </Link>{" "}
          if you'd like to read more!
        </h3>
        <br />
        <br />
        <h3 className={`font-bold text-gray text-2xl`}>pieces</h3>
        <ul className="list-disc pl-5 text-xl">
          {pieces.map((piece) => (
            <Link
              href={piece.link}
              target="_blank"
              className={`${main_color} underline hover:text-primary`}
              key={piece.title}
            >
              <li>{piece.title}</li>
            </Link>
          ))}
        </ul>
      </Layout>
    </>
  );
}
