import Layout from "../components/Layout";
import Header from "../components/Header";
import Image from "next/image";
import Socials from "../components/Socials";
import Link from "next/link";

export default function Home() {
  const identities = [
    "reader",
    "writer",
    "thinker",
    "lifter",
    "coder",
    "podcaster",
    "runner",
  ];
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="flex">
          <div className="text-xl">
            <p className="text-blue font-bold text-3xl">Hello friend, </p>
            <p className="mt-4 text-neon-green">
              <span className="font-bold">My name is Grant.</span> I'm a human
              being and a human doing.
            </p>
            <br />
            <p className="text-blue font-bold">Welcome to my website.</p>
            <p>
              I'm most interested in science, entrepreneurship and learning. But
              if there's something you're passionate about, I'd probably love to
              talk about it. Reach out!
            </p>
            <br />
            <p>
              Check out my{" "}
              <Link className="underline hover:text-neon-green" href="/about">
                about
              </Link>{" "}
              page to learn more!
            </p>
            <br />
            <div className="text-blue font-bold">
              <p>See you around,</p>
              <p>Grant</p>
            </div>
          </div>
          <div className="hidden md:block sticky mt-8 mx-1 flex-none">
            <div className="w-48 h-48 rounded-full border overflow-hidden ml-4">
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
