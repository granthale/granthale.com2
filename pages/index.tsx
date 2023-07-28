import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>grant hale</title>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout home>
        <div className="text-primary text-3xl">
          <p>👋 Welcome!</p>
          <br />
          <p>
            I believe that everyone has room for more curiosity, more wonder,
            and more creativity. I’m on a mission to hone those qualities in
            myself and help others do the same.
          </p>
          <br />
          <p>
            Recently graduated the University of Illinois with a degree in
            finance and a passion for computer science. Currently co-host a
            podcast called Surface Tension that aims to expose cool perspectives
            on the world around us. Don’t love the word “i”, looking for my
            post-i calling. Working on creating things, meeting smart,
            ambitious, kind people, and building a better character.
          </p>
        </div>
      </Layout>
    </>
  );
}
