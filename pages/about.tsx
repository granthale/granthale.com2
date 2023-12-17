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
        <div className="text-xl">
          <p className={`font-bold ${main_color}`}>
            Here are the things that I'm currently putting energy into:
          </p>
          <br />
          <ul className="font-bold list-disc pl-5 text-xl">
            <li key="traveling">
              <a
                href="https://www.instagram.com/gha.travels/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                "Walking 1000 miles, meeting 1000 people"
                <ExternalArrow />
              </a>{" "}
              in Asia
            </li>
            <li key="reading">
              <Link href="/books" className="font-bold">
                Reading
              </Link>{" "}
              science, philosophy, and history
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
            <li key="learning">
              {" "}
              <a
                href="https://seedtoforest.substack.com/p/learning-to-learn"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                Learning how to learn
                <ExternalArrow></ExternalArrow>
              </a>
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
            <span className="font-bold">Start at the local cafe.</span> Look for
            someone with noise-cancelling headphones and an iced coffee. I'm
            most likely reading, writing, or coding.
          </p>
          <br />
          <p>
            If I'm not there,{" "}
            <span className="font-bold">check the nearest running path</span>.
            Keep an eye out for the guy with a furrowed brow and Brooks on feet.
          </p>
          <br />
          <p>
            If you haven't found me yet, get ready to dig in a little. The
            search space has expanded.
          </p>
          <br />
          <ul className="list-disc pl-5 text-xl">
            <li>
              <span className="font-bold">Check China</span> first. The
              country's economic recovery and culture have been on my mind
              recently.
            </li>{" "}
            <li>
              Then{" "}
              <span className="font-bold">head to David Deutsch's office</span>.
              We've been grappling with explanation and epistemology.
            </li>
            <li>
              Better yet,{" "}
              <span className="font-bold">look for William Zinsser</span>, in an
              effort to write better, I've been getting to know his process.
            </li>
            <li>
              Ah! Now that I think about it.{" "}
              <span className="font-bold">
                Find Andy Matuschak, Michael Nielsen, or Bret Victor
              </span>
              . We've been deep down a rabbit hole on spaced-repetition,
              interactive design, and effective learning.
            </li>
          </ul>
          <br />
          <p>
            <span className="font-bold">
              At this point, if I haven't been found, I hope I'm okay!
            </span>{" "}
            This website should do the trick until I find my way back :)
          </p>
        </div>
        <br />
        <p className="text-xl">
          On a professional note, I've got{" "}
          {Math.round(
            (new Date("2024-01-22").getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          ) + 1}{" "}
          days until I start work for Boston Consulting Group. I'll be traveling
          through Asia until then.
        </p>

        <br />
        <h3 className={`font-bold ${main_color} text-3xl`}>hypotheses</h3>
        <br />
        <p className="font-bold text-xl">I'm looking forward to:</p>
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
        <h3 className={`font-bold ${main_color} text-3xl`}>
          colophon & contact
        </h3>
        <br />
        <p className="text-xl font-bold">
          If any of these topics or people also interest you, reach out on{" "}
          <a
            className=""
            href="https://twitter.com/grant__hale"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <ExternalArrow />
          </a>{" "}
          or by{" "}
          <a className="" href="mailto:g@granthale.com">
            email
            <ExternalArrow />
          </a>
          !
        </p>
        <br />
        <p className="text-xl">
          <span>
            This website was made from scratch with Next.js. I hope you like it.
          </span>{" "}
          If there's anything that isn't working or a feature that you think
          would be cool to add, let me know!
        </p>
      </Layout>
    </>
  );
}
