import Layout from "../components/Layout";
import Link from "next/link";
import Header from "../components/Header";
import Arrow from "../components/Arrow";

export default function About() {
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
                Writing
              </Link>{" "}
              longer-form pieces and evergeen notes
            </li>
            <li key="traveling">
              <Link className="" href="/travel">
                Traveling
              </Link>
              , building relationships, and exploring different cultures
            </li>
          </ul>

          <br />
          <h3 className={`font-bold ${main_color} text-3xl`}>
            time & location
          </h3>
          <br />
          <p className={`font-bold ${main_color}`}>
            Assuming you didn't have my number. Where would you find me?
          </p>
          <br />
          <p>
            <span className={`font-bold ${main_color}`}>
              Start at the local cafe.
            </span>{" "}
            Look for someone with noise-cancelling headphones and an iced
            coffee. I'm most likely reading, writing, or coding.
          </p>
          <br />
          <p>
            If I'm not there,{" "}
            <span className={`font-bold ${main_color}`}>
              check the nearest running path
            </span>
            . Keep an eye out for the guy with a furrowed brow and Brooks on
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
              <span className={`font-bold ${main_color}`}>Check China</span>{" "}
              first. The country's economic recovery and culture have been on my
              mind recently.
            </li>{" "}
            <li>
              Then{" "}
              <span className={`font-bold ${main_color}`}>
                head to David Deutsch's office
              </span>
              . We've been grappling with epistemology.
            </li>
            <li>
              Better yet,{" "}
              <span className={`font-bold ${main_color}`}>
                look for William Zinsser
              </span>
              , in an effort to write better, I've been asking him a lot of
              questions.
            </li>
            <li>
              Ah! Now that I think about it.{" "}
              <span className={`font-bold ${main_color}`}>
                Find Andy Matuschak, Michael Nielsen, or Bret Victor
              </span>
              . We've been deep down a rabbit hole on spaced-repetition,
              interactive design, and effective learning.
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
          On a more professional note, I've got{" "}
          {Math.round(
            (new Date("2024-01-22").getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          ) + 1}{" "}
          days until I start work for Boston Consulting Group (not that I'm
          counting). I'll be traveling through Asia until then.
        </p>

        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>hypotheses</h3>
        <br />
        <p className={`font-bold ${main_color} text-xl`}>
          I'm looking forward to:
        </p>
        <br />
        <ul className="list-disc pl-5 text-xl">
          <li key="learning">
            Spending time reading about and exploring different fields
          </li>
          <li key="entrepreneurship">
            Working in/on an early-stage company (I'm currently most interested
            in Edtech tools for thought)
          </li>
          <li key="living">
            Living in a different country. Learning a second language
            (potentially 中文)
          </li>
          <li key="friendships">
            Being back in one place for a longer period of time. Facilitating
            curious, engaging, productive conversations amongst friends
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
        <p className="text-xl">
          <span className={`font-bold ${main_color}`}>
            This website was made with care and from scratch with Next.js. I
            hope it makes for an enjoyable experience.
          </span>{" "}
          If there's anything that isn't working correctly or a feature you
          think would be cool to add, let me know!
        </p>
      </Layout>
    </>
  );
}
