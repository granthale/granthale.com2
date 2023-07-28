import Link from "next/link";
import Layout from "../components/layout";

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
  return (
    <>
      <Layout sidebar={sidebar}>
        <h1 className="font-bold text-tealish text-3xl">writing!</h1>
        <h3 className="text-gray text-lg">
          I write for clarity and I write to explore.
          Subscribe to{" "}
          <Link className="underline hover:text-primary" href="https://treetoforest.substack.com/">Tree to Forest</Link>{" "}
          and get ready for more!
        </h3>
        <br />
        <br />
        <br />
        {pieces.map((piece) => (
          <Link
            href={piece.link}
            className="text-tealish text-xl underline hover:text-primary"
          >
            {piece.title}
          </Link>
        ))}
      </Layout>
    </>
  );
}
