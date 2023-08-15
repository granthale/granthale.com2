import Layout from "../components/Layout";
import Header from "../components/Header";
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
            <p className="text-blue font-bold text-3xl">Hello, I'm Grant! </p>
            <br />
            <p className="mt-4 text-neon-green font-bold">
              I believe that everyone has more room for curiosity and
              creativity. I’m living to broaden those qualities in myself and
              help others do the same.
            </p>
            <br />
            <p className="text-blue mt-4 font-bold text-2xl">
              Me in 10 seconds
            </p>
            <br />
            <ul className="list-disc pl-5 text-xl">
              <li key="learning and traveling">
                I'm a reading, writing, thinking, lifting, coding, podcasting,
                and running guy whose currently splitting time between Europe,
                San Francisco, Chicago, and Asia.
              </li>
              <br />
              <li>
                I'm actively trying to better understand different businesses
                and cultures, while putting myself in new, fun, and challenging
                environments.
              </li>
            </ul>
            <br />
            <p className="text-blue mt-4 font-bold text-2xl">
              Me in 10 minutes?
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

            <p className="text-neon-green font-bold">Reach out to say hi!</p>
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
