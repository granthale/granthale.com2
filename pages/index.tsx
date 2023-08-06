import Layout from "../components/Layout";
import Header from "../components/Header";
import Arrow from "../components/Arrow";
import Image from "next/image";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="flex">
          <div className="text-xl">
            <p className="text-neon-green mt-4">
              <span className="text-blue font-bold">Hello, I'm Grant! </span>I believe that everyone
              has more room for <span className="font-bold">curiosity</span> and{" "}
              <span className="font-bold">creativity</span>. I’m living to
              broaden those qualities in myself and help others do the same.
            </p>
            <br />
            <ul className="list-disc pl-5 text-xl">
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
              <li key="travel">
                I’m traveling the world, looking for perspective on society and
                self
              </li>
              <li key="learning">
                I’m learning about different fields to find problems worth
                solving
              </li>
            </ul>
            <br />
            <p className="text-neon-green font-bold">Reach out if you'd like to talk!</p>
          </div>
          <div className="hidden md:block sticky mt-4 mx-2 flex-none">
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
        <br />
        <Socials />
      </Layout>
    </>
  );
}
