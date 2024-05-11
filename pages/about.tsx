import Layout from "../components/Layout";
import Link from "next/link";
import Header from "../components/Header";
import ExternalArrow from "../components/ExternalArrow";

export default function About() {
  const main_color = "text-blue";

  return (
    <>
      <Header page="about" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>about!</h1>
        <br />
        <p className="text-xl italic">(Last updated 05-11-24)</p>
        <br />
        <div className="text-xl">
          <p className={`font-bold ${main_color}`}>
            Here are the things that I'm currently putting energy into:
          </p>
          <br />
          <ul className="font-bold list-disc pl-5 text-xl">
            <li key="working">
              Working @{" "}
              <a
                href="bcg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                BCG
                <ExternalArrow />
              </a>{" "}
              Chicago
            </li>
            <li key="reading">
              <Link href="/library" className="font-bold">
                Reading
              </Link>{" "}
              fiction (during the week) and non-fiction (on the weekends)
            </li>
            <li key="questions">
              Getting better at asking the right questions
            </li>
            <li key="writing">
              {" "}
              <Link
                href="/writing"
                className="hover:text-neon-green hover:border-neon-green font-bold"
              >
                Writing
              </Link>{" "}
              longer-form pieces and evergeen notes
            </li>
            <li key="living">
              {" "}
              Crafting an authentic, agentic, meaningful life
            </li>
          </ul>

          <br />
          <h3 className={`font-bold ${main_color} text-3xl`}>
            time & location
          </h3>
          <br />
          <p className={`font-bold ${main_color}`}>
            Assuming you were having trouble getting ahold of me (which some may
            say is likely). Where would you find me?
          </p>
          <br />
          <p>
            <span className="font-bold">Start at the local cafe.</span> Look for
            someone with big ol' headphones and a drip coffee. I'll probably be
            reading, writing, coding, or talking to friends.
          </p>
          <br />
          <p>
            If I'm not there,{" "}
            <span className="font-bold">check the nearest running path</span>.
            Keep an eye out for someone with a furrowed brow and Brooks on feet.
          </p>
          <br />
          <p>If you haven't found me yet, get ready to dig in a little.</p>
          <br />
          <ul className="list-disc pl-5 text-xl">
            <li>
              I would{" "}
              <span className="font-bold">
                check the tools for thought rabbit hole
              </span>{" "}
              first. Find{" "}
              <a
                href="https://andymatuschak.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Andy Matuschak
                <ExternalArrow />
              </a>
              ,{" "}
              <a
                href="https://michaelnielsen.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michael Nielsen
                <ExternalArrow />
              </a>
              , or{" "}
              <a
                href="https://andymatuschak.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bret Victor
                <ExternalArrow />
              </a>
              . I've been digging deep for ~a year now on spaced-repetition,
              interactive design, and effective learning.
            </li>
            <li>
              If I'm not there,{" "}
              <span className="font-bold">
                head to{" "}
                <a
                  className="font-bold"
                  href="https://andymatuschak.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  David Deutsch's
                  <ExternalArrow />
                </a>
                ,{" "}
                <a
                  className="font-bold"
                  href="https://andymatuschak.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Richard Dawkin's
                  <ExternalArrow />
                </a>
                , and{" "}
                <a
                  className="font-bold"
                  href="https://en.wikipedia.org/wiki/Richard_Hamming"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Richard Hamming's
                  <ExternalArrow />
                </a>{" "}
                offices
              </span>
              . They've got a way with words, and what they spend time thinking
              about deeply resonates with me.
            </li>
            <li>
              <span className="font-bold">
                Keep an eye out for William Zinsser
              </span>
              , I've been trying to stay on top of writing since starting work,
              and among other sources have found him to be a great repo of
              information and motivation.
            </li>
            <li>
              Finally (this ones more involved), I would{" "}
              <span className="font-bold">book a plane ticket to Asia.</span> I
              loved my time there and the region's future and languages have
              been on my mind recently.
            </li>{" "}
          </ul>
          <br />
          <p>
            <span className="font-bold">
              If you haven't found me, I hope I'm okay!
            </span>{" "}
            This website should do the trick until I find my way back :)
          </p>
        </div>
        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>hypotheses</h3>
        <br />
        <p className="font-bold text-xl">
          These are things that I'm fairly certain I'd like to do (or continue
          doing):
        </p>
        <br />
        <ul className="list-disc pl-5 text-xl">
          <li key="learning">
            Spend time reading through, wallowing in, and exploring ambitious
            questions
          </li>
          <li key="entrepreneurship">
            Work in/on an early-stage company with a close-knit motivated team
          </li>
          <li key="living">
            Live in a different country for an extended period of time. Learn a
            second langauge while there (potentially 中文 or español)
          </li>
          <li key="friendships">
            Facilitate curious, engaging conversations amongst friends and
            strangers
          </li>
        </ul>

        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>
          closing time
        </h3>
        <br />
        <p className="text-xl font-bold">
          If you've gotten this far, I'd love to meet! Reach out on{" "}
          <a
            className="font-bold"
            href="https://twitter.com/grant__hale"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <ExternalArrow />
          </a>{" "}
          or via{" "}
          <a className="font-bold" href="mailto:g@granthale.com">
            email
            <ExternalArrow />
          </a>
          !
        </p>
        <br />
        <p className="text-xl italic">
          <span>
            (This website was made from scratch and with love using Next.js. I
            hope it feels cozy)
          </span>
        </p>
      </Layout>
    </>
  );
}
