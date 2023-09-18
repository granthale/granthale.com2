import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Arrow from "../../components/Arrow";
import { writing } from "../../data/writing";
import Link from "next/link";
import { getSortedData } from "../../utils/usePosts";
import { GetStaticProps } from "next";

export default function Writing({
  allMusingData,
}: {
  allMusingData: {
    id: string;
    title: string;
    date: string;
  }[];
}) {
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
            className="underline hover:text-neon-green"
            href="https://treetoforest.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tree to Forest
            <Arrow></Arrow>
          </a>{" "}
          and my{" "}
          <Link className="underline hover:text-neon-green" href="/rss.xml">
            RSS feed<Arrow></Arrow>
          </Link>{" "}
          to read more!
        </h3>
        <br />
        <br />
        <h3 className={`${main_color} font-bold text-3xl`}>pieces</h3>
        <br />
        <ul className="pl-5 text-xl">
          {writing.map((piece) => (
            <li className="mb-4" key={piece.title}>
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
          {allMusingData.map(({ id, date, title }) => (
            <li className="mb-4" key={id}>
              <Link
                className={`hover:text-neon-green`}
                key={title}
                href={`/writing/${id}`}
              >
                <span className="font-light mr-4">{date}</span>
                <u>
                  {title}
                  <Arrow></Arrow>
                </u>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allMusingData = getSortedData("musings");
  return {
    props: {
      allMusingData,
    },
  };
};
