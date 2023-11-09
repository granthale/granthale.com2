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
    { month: "November", location: "Philippines, Thailand, Vietnam" },
    { month: "December", location: "Cambodia, India, Chicago" },
    { month: "January", location: "Chicago" },
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
            My name is Grant. I'm currently traveling in Asia.
          </p>
          <br />
          <p className="text-xl">
            Here are the things that I'm currently putting energy into:
          </p>
          <br />
          <ul className="list-disc pl-5 text-xl">
            <li key="learning">
              {" "}
              <a
                href="https://seedtoforest.substack.com/p/learning-to-learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learning how to learn
                <Arrow></Arrow>
              </a>
            </li>
            <li key="reading">
              <Link href="/books" className="">
                Reading
              </Link>{" "}
              science, history, and psychology
            </li>
            <li key="writing">
              {" "}
              <Link
                href="/writing"
                className="hover:text-neon-green hover:border-neon-green"
              >
                Writing pieces
              </Link>{" "}
              and evergeen-style notes
            </li>
            <li key="podcasting">
              <Link className="" href="/podcast">
                Recording
              </Link>{" "}
              podcasts for Surface Tension
            </li>
            <li key="traveling">
              Traveling, building relationships, and exploring different
              cultures
            </li>
          </ul>
          <br />
          <h3 className={`font-bold ${main_color} text-3xl`}>
            time & location
          </h3>
          <br />
          <p>
            Assuming you didn't have my number.{" "}
            <span className="font-bold">Where would you find me?</span>
          </p>
          <br />
          <p>
            <span className="font-bold">Start at the local cafe.</span> Look for
            someone with noise-cancelling headphones and an iced coffee. I'm
            most likely reading, writing, or coding.
          </p>
          <br />
          <p>
            If I'm not there,{" "}
            <span className="font-bold">
              check the nearest running path or gym
            </span>
            . Keep an eye out for the guy with a smile on his face and Brooks on
            feet.
          </p>
          <br />
          <p>
            If you haven't found me yet, get ready to dig in a little. The
            search space has expanded.
          </p>
          <br />
          <ul className="list-disc pl-5 text-xl">
            <li>
              <span className="font-bold">Check China first.</span> The
              country's economic recovery has been on my mind recently.
            </li>{" "}
            <li>
              Then{" "}
              <span className="font-bold">check Richard Hamming's office</span>.
              I've been sitting in learning the engineering mindset.
            </li>
            <li>
              Better yet,{" "}
              <span className="font-bold">look for Lewis Carroll Epstein</span>,
              we've been talking about physics intuition.
            </li>
            <li>
              Ah! Now that I think about it,{" "}
              <span className="font-bold">
                check what Andy Matuschak and Michael Nielsen are up to
              </span>
              . I've been deep down a rabbit hole with them on spaced-repetition
              and learning.
            </li>
          </ul>
          <br />
          <p>
            At this point, if I haven't been found, I hope I'm okay! This
            website should do the trick until I find my way back :)
          </p>
        </div>
        <br />
        <p className="text-xl">
          I've got{" "}
          <span className="font-bold">
            {Math.round(
              (new Date("2024-01-22").getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            ) + 1}{" "}
            days and counting{" "}
          </span>
          until I start work for Boston Consulting Group. Here is where I've
          been and where I'll be from now until then:
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
        <h3 className={`font-bold ${main_color} text-3xl`}>hypotheses</h3>
        <br />
        <p className={`font-bold ${main_color} text-xl`}>
          At this point, I'm looking forward to:
        </p>
        <br />
        <ul className="list-disc pl-5 text-xl">
          <li key="learning">
            Spending time reading and exploring different fields
          </li>
          <li key="entrepreneurship">
            Working in/on an early-stage company (hopefully in EdTech)
          </li>
          <li key="living">
            Living in a different country for an extended period of time.
            Learning a second language fluently
          </li>
          <li key="talking">
            Facilitating curious, engaging, productive conversations amongst
            friends and strangers
          </li>
        </ul>
        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>contact</h3>
        <br />
        <p className="text-xl">
          I'm always looking to meet new people and learn new things. If you'd
          like to chat, reach me on{" "}
          <a
            className=""
            href="https://twitter.com/grant__hale"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <Arrow />
          </a>{" "}
          or by{" "}
          <a className="" href="mailto:g@granthale.com">
            email
            <Arrow />
          </a>
          !
        </p>
        <br />
        <p className={`font-bold ${main_color} text-xl`}>
          This website was made with care and from scratch with Next.js. I hope
          you enjoy.
        </p>
      </Layout>
    </>
  );
}
