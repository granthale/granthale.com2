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
    { month: "September", location: "Japan, Taiwan" },
    { month: "October", location: "Taiwan, China" },
    { month: "November", location: "Phillipines, Thailand, Indonesia, India" },
    { month: "December", location: "India, Chicago" },
  ];
  const main_color = "text-reddish";
  return (
    <>
      <Header page="about" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>about!</h1>
        <br />
        <div className="text-xl">
          <p className={`font-bold ${main_color}`}>
            My name is Grant. I'm currently living in Japan.
          </p>
          <br />
          <p>
            You texted. I didn't respond. I lost my phone. I'm missing. Where
            should you look to find me?
          </p>
          <br />
          <p>
            Start at the local cafe. Look for the the guy with noise-cancelling
            headphones and an iced coffee. He's probably reading (now on
            Kindle), writing (now in Obsidian), or coding (always in VSCode).
          </p>
          <br />
          <p>
            If I'm not there, check the nearest airport, and then the greenest
            running path you can find. Keep an eye out for the guy with a smile
            on his face and some Brooks on feet.
          </p>
          <br />
          <p>
            If you haven't found me yet, things get a little more difficult. Get
            ready to dig in a little. The search space has expanded.
          </p>
          <br />
          <p>
            Check China first. Look for someone with a far-and-away look in
            their eyes. The country's incredible economic recovery has been on
            my mind recently. Then check Richard Hamming's abode. I've been
            sitting alongside him learning the engineering mindset. Better yet,
            look for Lewis Carroll Epstein, we've been talking about getting
            proper intuitions for physics. Ah! Now that I think about it, check
            out what Andy Matuschak and Michael Nielsen are up to. I've been
            deep down a rabbit hole with them on spaced-repetition and learning.
          </p>
          <br />
          <p>
            Otherwise, I hope I'm okay! This website should do the trick until I
            find my way back :)
          </p>
        </div>
        <br />

        <h3 className={`font-bold ${main_color} text-3xl`}>time & location</h3>
        <br />
        <p className="text-xl">
          On a more literal plane. I've got{" "}
          <span className="font-bold">
            {Math.round(
              (new Date("2024-01-22").getTime() - new Date().getTime()) /
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
          <li key="writing">
            {" "}
            <Link href="/writing" className="underline hover:text-neon-green">
              Writing,
              <Arrow></Arrow>
            </Link>{" "}
            evergeen-style
          </li>
          <li key="reading">
            <Link href="/books" className="underline hover:text-neon-green">
              Reading
              <Arrow></Arrow>
            </Link>{" "}
            science, history, and psychology. Taking notes and writing spaced
            repetition prompts.
          </li>
          <li key="podcasting">
            <Link className="underline hover:text-neon-green" href="/podcast">
              Recording<Arrow></Arrow>
            </Link>{" "}
            podcast episodes for Surface Tension
          </li>
          <li key="traveling">
            Traveling, building relationships, and exploring different cultures
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
            Join an early-stage company or start my own (most likely in EdTech
            or the Tools for Thought space)
          </li>
          <li key="living">
            Live in a different country for an extended period of time
          </li>
          <li key="talking">
            Facilitate interesting & productive conversations among friends and
            strangers
          </li>
        </ul>
        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>colophon</h3>
        <br />
        <p className="text-xl">
          This website was made with care (and from scratch) using Next.js.
        </p>
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
