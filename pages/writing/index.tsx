import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Arrow from "../../components/Arrow";
import { writing } from "../../data/writing";
import { musing } from "../../data/musing";

export default function Writing() {
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
            href="https://treetoforest.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
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
        <ul className="pl-5 text-xl">
          {writing.map((piece) => (
            <li className="mb-4">
              <a
                href={piece.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-neon-green`}
                key={piece.title}
              >
                <span className="font-light mr-4">{piece.date}</span>
                <u>
                  {piece.title}
                  <Arrow></Arrow>
                </u>
              </a>
            </li>
          ))}
        </ul>
        <br />
        <h3 className={`${main_color} font-bold text-3xl`}>musing</h3>
        <br />
        <ul className="pl-5 text-xl">
          {musing.map((muse) => (
            <li className="mb-4">
              <a
                href={muse.link}
                className={`hover:text-neon-green`}
                key={muse.title}
              >
                <span className="font-light mr-4">{muse.date}</span>
                <u>
                  {muse.title}
                  <Arrow></Arrow>
                </u>
              </a>
              <br />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
