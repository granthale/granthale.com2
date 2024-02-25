import Layout from "../components/Layout";
import Header from "../components/Header";
import Image from "next/image";
import Socials from "../components/Socials";
import Link from "next/link";
import ExternalArrow from "../components/ExternalArrow";
import generateRssFeed from "../utils/generateRssFeed";

export const getStaticProps = async () => {
  await generateRssFeed();

  return {
    props: {}, // Add any props you need for your page here
    revalidate: 60, // Optional: Re-generate the RSS feed every 60 seconds
  };
};

export default function Home() {
  return (
    <>
      <Header page="home" />
      <Layout home>
        <div className="flex">
          <div className="text-xl mt-2">
            <p className="text-blue font-bold text-3xl">Hello friend, </p>
            <p className="mt-4 text-blue">
              <span className="font-bold">My name is Grant.</span> I'm a human
              being and a human doing.
            </p>
            <br />
            <p>But most of all, I'm a human asking.</p>
            <br />
            <p>
              Asking about what? Well, ~83% of the time about learning, tools
              for thought, climate, payments, entrepreneurship, and history. The
              other 17% is mostly covered by technology, philosophy, and
              wellbeing.
            </p>
            <br />
            <p>
              Check out the{" "}
              <Link className="" href="/about">
                about
              </Link>{" "}
              page to learn about me, and the{" "}
              <Link className="" href="/seeds">
                seeds
              </Link>{" "}
              and{" "}
              <Link className="" href="/library">
                library
              </Link>{" "}
              pages to see what influences my thinking!
            </p>
            <br />
            <div className="text-blue font-bold">
              <p>See ya around,</p>
              <p>Grant</p>
            </div>
          </div>
          <div className="hidden md:block sticky mt-8 mx-1 flex-none">
            <div className="w-48 h-48 rounded-full border overflow-hidden ml-8">
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
