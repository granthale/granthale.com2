import Layout from "../../components/Layout";
import Header from "../../components/Header";
import ExternalArrow from "../../components/ExternalArrow";
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
            className=""
            href="https://seedtoforest.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seed to Forest
            <ExternalArrow></ExternalArrow>
          </a>{" "}
          and my{" "}
          <Link className="" href="/rss.xml">
            RSS feed
          </Link>{" "}
          to read more!
        </h3>
        <br />
        <h3 className="text-xl italic">
          + stay tuned for an exciting update. A friend and I are working on a
          digital garden that will be linked soon!
        </h3>
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
                className={``}
                key={piece.title}
              >
                <span className="font-light mr-4">{piece.date}</span>
                <u className="no-underline">
                  {piece.title}
                  <ExternalArrow />
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
                <u className="no-underline">{title}</u>
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
