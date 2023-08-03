import Layout from "../components/Layout";
import Header from "../components/Header";
import Arrow from "../components/Arrow";

export default function Writing() {
  const pieces = [
    {
      title: "The European Experiment",
      link: "https://treetoforest.substack.com/p/the-european-experiment",
    },
  ];
  const main_color = "text-blue";
  return (
    <>
      <Header page="writing" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>writing!</h1>
        <br />
        <h3 className="text-xl">
          I write for clarity and I write to explore. Subscribe to{" "}
          <a
            className="underline text-blue hover:text-neon-green"
            href="https://treetoforest.substack.com/" target="_blank" rel="noopener noreferrer"
          >
            Tree to Forest
            <Arrow></Arrow>
          </a>{" "}
          if you'd like to read more!
        </h3>
        <br />
        <br />
        <h3 className={`${main_color} font-bold text-3xl`}>pieces</h3>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {pieces.map((piece) => (
            <a
              href={piece.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline hover:text-neon-green`}
              key={piece.title}
            >
              <li>
                {piece.title}
                <Arrow></Arrow>
              </li>
            </a>
          ))}
        </ul>
      </Layout>
    </>
  );
}
