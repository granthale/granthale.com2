import Layout from "../components/Layout";
import Header from "../components/Header";
import Image from "next/image";
import ExternalArrow from "../components/ExternalArrow";
import Socials from "../components/Socials";
import generateRssFeed from "../utils/generateRssFeed";
import Link from "next/link";

export const getStaticProps = async () => {
  await generateRssFeed();

  return {
    props: {},
    revalidate: 60,
  };
};

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="flex flex-col md:flex-row">
          <div className="text-xl mt-2 md:w-3/4">
            <p className="text-blue font-bold text-3xl">
              Hello friend, I'm Grant.
            </p>
            <br />
            <p>
              My favorite way to spend time is{" "}
              <a
                href="https://www.verdant.ink/Pieces/My-12-questions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                chasing good questions
                <ExternalArrow />
              </a>
              .
            </p>
            <br />
            <p className="font-bold">These days, I’m:</p>
            <ul className="list-disc pl-8 ml-4 mt-2 space-y-2">
              <li>
                <a
                  href="https://fikaandfriends.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Building community in Chicago
                  <ExternalArrow />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/grantrhale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Strategizing at BCG
                  <ExternalArrow />
                </a>
              </li>
              <li>Recovering from a right hip injury</li>
              <li>
                <Link href="/writing" className="text-blue hover:underline">
                  Writing to make sense of the world
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-blue hover:underline">
                  Reading to stay in awe of it
                </Link>
              </li>
            </ul>
            <br />
            <p className="font-bold">In a past life, I:</p>
            <ul className="list-disc pl-8 ml-4 mt-2 space-y-2">
              <li>
                <Link href="/podcast" className="text-blue hover:underline">
                  Ran the Surface Tension podcast
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gha.travels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Traveled through Asia
                  <ExternalArrow />
                </a>
                , Europe, and the US
              </li>
              <li>Studied finance and CS at UIUC</li>
              <li>
                <a
                  href="https://soundcloud.com/aloe-org/lafskafs-x-akablake-weirdworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Produced instrumentals
                  <ExternalArrow />
                </a>
              </li>
              <li>Played all-city baseball</li>
            </ul>
            <br />
            <p>Say hello! I'm always pumped to meet someone new.</p>
            <br />
            <p>With warmth,</p>
            <p className="text-blue font-bold">— G</p>
          </div>
        </div>

        <div className="mt-8">
          <Socials />
        </div>
      </Layout>
    </>
  );
}
