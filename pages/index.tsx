import Link from "next/link";
import Layout from "../components/layout";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="text-primary text-2xl">
          <p>👋 welcome!</p>
          <br />
          <p>
            i believe that everyone has more room for{" "}
            <span className="font-bold">curiosity, wonder, and creativity</span>
            . i’m living to broaden those qualities in myself and help others do
            the same.
          </p>
          <br />
          <p>
            i currently co-host a podcast called{" "}
            <Link
              className="underline hover:text-neon-green"
              href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
              target="_blank"
            >
              surface tension
            </Link>{" "}
            that aims to expose insightful perspectives on the world around us.
            i (ironically) don’t love the word “i” and am currenty{" "}
            <span className="font-bold">looking for my post-"i" calling.</span>
          </p>
          <br />
          <p>
            (here i go again) i'm currently working on building things, meeting
            smart, ambitious, kind people, and experiencing the many things our
            world has to offer.
          </p>
          <br />
          <p>
            click around to get to know me and reach out if you'd like to
            connect!
          </p>
        </div>
      </Layout>
    </>
  );
}
