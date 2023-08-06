import Layout from "../components/Layout";
import Header from "../components/Header";
import Arrow from "../components/Arrow";
import Image from "next/image";
import Socials from "../components/Socials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="flex">
          <div className="text-xl">
            <p className="text-neon-green mt-4">
              <span className="text-blue font-bold">Hello, I'm Grant! </span>I
              believe that everyone has more room for{" "}
              <span className="font-bold">curiosity</span> and{" "}
              <span className="font-bold">creativity</span>. I’m living to
              broaden those qualities in myself and help others do the same.
            </p>
            <br />
            <p className="text-blue mt-4 font-bold">Me in 10 seconds:</p>
            <ul className="list-disc pl-5 text-xl">
              <li key="travel">
                I’m traveling through America, Europe, and Asia
              </li>
              <li key="podcast">
                I’m asking questions on{" "}
                <a
                  className="underline hover:text-neon-green"
                  href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
                  target="_blank"
                >
                  Surface Tension
                  <Arrow></Arrow>
                </a>
              </li>
              <li key="learning">
                I’m learning about Chinese history, programming, and
                entrepreneurship
              </li>
            </ul>
            <br />
            <p className="text-blue mt-4 font-bold">Me in 10 minutes:</p>
            <p>
              Check out my{" "}
              <Link className="underline hover:text-neon-green" href="/about">
                about
              </Link>{" "}
              page to learn more!
            </p>
            <br />

            <p className="text-neon-green font-bold">
              Reach out if you'd like to talk!
            </p>
          </div>
          <div className="hidden md:block sticky mt-8 mx-1 flex-none">
            <div className="w-48 h-48 rounded-full border overflow-hidden">
              <Image
                src="/images/man_earth.jpeg"
                alt="man on earth"
                width={250}
                height={250}
                priority={true}
              />
            </div>
          </div>
        </div>
        <Socials />
      </Layout>
    </>
  );
}
