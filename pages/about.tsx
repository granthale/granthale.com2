import Layout from "../components/Layout";
import Link from "next/link";
import Header from "../components/Header";
import Arrow from "../components/Arrow";

export default function About() {
  const locations = [
    { month: "May", location: "Chicago" },
    {
      month: "June",
      location: "Iceland, Amsterdam, Norway, London, France, and Italy",
    },
    { month: "July", location: "San Francisco" },
    { month: "August", location: "San Francisco, Chicago" },
    { month: "September", location: "Japan, Thailand, Indonesia" },
    { month: "October", location: "China, Taiwan" },
    { month: "November", location: "India" },
    { month: "December", location: "Chicago (?)" },
  ];
  const main_color = "text-reddish";
  return (
    <>
      <Header page="about" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>about!</h1>
        <br />
        <p className={`font-bold ${main_color} text-xl`}>
          I'm currently living in Chicago, and making an effort to truly think
          everyday.
        </p>
        <br />

        <p className="text-xl">
          In my freetime, I love to read, spend time with friends, play sports,
          write{" "}
          <Link className="underline hover:text-neon-green" href="/writing">
            words
            <Arrow></Arrow>
          </Link>{" "}
          and{" "}
          <a
            className="underline hover:text-neon-green"
            href="https://github.com/granthale"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
            <Arrow></Arrow>
          </a>
          , and run.
        </p>
        <br />

        <p className="text-xl">
          I recently graduated in May 2023 from the{" "}
          <span className="font-bold">University of Illinois</span>, and I truly
          don't know where I would be without the people I met and the
          (main)character that I developed.
        </p>
        <br />

        <h3 className={`font-bold ${main_color} text-3xl`}>time & location</h3>
        <br />
        <p className="text-xl">
          I've got ~
          <span className="font-bold">
            {Math.round(
              (new Date("2024-01-05").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            ) + 1}{" "}
            days and counting{" "}
          </span>
          until I start work for Boston Consulting Group as an Associate. Here
          is where I'll be from now until then:
        </p>
        <br />
        <ul>
          {locations.map((location) => (
            <li key={location.location} className="text-xl">
              <span className="font-bold">{location.month}:</span>{" "}
              {location.location}
            </li>
          ))}
        </ul>
        <br />

        <h3 className={`font-bold ${main_color} text-3xl`}>energy</h3>
        <br />
        <p className="text-xl">
          Here are the things that I'm currently putting energy into:
        </p>
        <br />
        <ul className="list-disc pl-5 text-xl">
          <li key="podcasting">
            Recording podcast episodes for{" "}
            <Link className="underline hover:text-neon-green" href="/podcast">
              Surface Tension
              <Arrow></Arrow>
            </Link>
          </li>
          <li key="writing">
            {" "}
            <Link href="/writing" className="underline hover:text-neon-green">
              Writing
              <Arrow></Arrow>
            </Link>{" "}
            @ least 15 minutes a day - ideally closer to an hour
          </li>
          <li key="reading">
            <Link href="/books" className="underline hover:text-neon-green">
              Reading
              <Arrow></Arrow>
            </Link>{" "}
            like a madman (mostly history, science, and biographies)
          </li>
        </ul>
        <br />

        <h3 className={`font-bold ${main_color} text-3xl`}>hypotheses</h3>
        <br />
        <p className={`font-bold ${main_color} text-xl`}>
          I'm pretty sure that I want to do the following:
        </p>
        <br />
        <ul className="list-disc pl-5 text-xl">
          <li key="entrepreneurship">
            Join an early-stage company or start my own
          </li>
          <li key="living">
            Live in a different country for an extended period of time
          </li>
          <li key="talking">
            Facilitate great conversations with friends & strangers
          </li>
          <li key="talking">Read every (great) book known to man</li>
        </ul>
        <br />

        <h3 className={`font-bold ${main_color} text-3xl`}>contact</h3>
        <br />
        <p className="text-xl">
          I'm always looking to meet new people and learn new things. If you'd
          like to chat, reach me on{" "}
          <a
            className="underline hover:text-neon-green"
            href="https://twitter.com/grant__hale"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <Arrow />
          </a>{" "}
          or by{" "}
          <a
            className="underline hover:text-neon-green"
            href="mailto:g@granthale.com"
          >
            email
            <Arrow />
          </a>
          !
        </p>
      </Layout>
    </>
  );
}
