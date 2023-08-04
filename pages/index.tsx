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
            <p className="text-primary font-extrabold text-4xl">👋 Hello!</p>
            <br />
            <p className="text-neon-green">
              I'm Grant. I believe that everyone has more room for{" "}
              <span className="font-bold">curiosity and creativity</span>. I’m
              living to broaden those qualities in myself and help others do the
              same.
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
            <p className="text-neon-green">
              Reach out if you want to chat about any of the above, or if you
              have a problem you think I can help with!
            </p>
          </div>
          <div className="hidden md:block sticky m-8 flex-none">
            <Image
              src="/images/boat.png"
              alt="boat"
              width={200}
              height={200}
              priority={true}
            />
            <div className="relative mt-12">
              <Socials />
            </div>
          </div>
        </div>
        <div className="md:hidden relative mt-8">
          <Socials />
        </div>
      </Layout>
    </>
  );
}
