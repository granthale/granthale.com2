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
            <li key="reading">
              <Link href="/library" className="font-bold">
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
            <li key="kernel">
              Learning with peers @{" "}
              <a
                href="https://kernel.community"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                Kernel
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
              <span className="font-bold">look for William Zinsser</span>, I've
              been getting to know his writing process.
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
        <h3 className={`font-bold ${main_color} text-3xl`}>hypotheses</h3>
        <br />
        <p className="font-bold text-xl">
          These are things that I'm fairly certain I'd like to do (or continue
          doing):
        </p>
        <br />
        <ul className="list-disc pl-5 text-xl">
          <li key="learning">
            Spend time reading through, wallowing in, and exploring the world's
            most important problems
          </li>
          <li key="entrepreneurship">
            Working in/on an early-stage company (I'm currently most interested
            in EdTech and tools for thought)
          </li>
          <li key="living">
            Living in a different country for an extended period of time.
            Learning a second language (potentially 中文)
          </li>
          <li key="friendships">
            Facilitating curious, engaging, productive conversations amongst
            friends
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
            This website was made from scratch and with love using Next.js. I hope you enjoy!
          </span>
        </p>
      </Layout>
    </>
  );
}
