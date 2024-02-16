import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";
import Seed from "../../components/Seed";
import Link from "next/link";

const tech = () => {
  return (
    <>
      <Header page="seeds | technology" />
      <Seed selected="Technology">
        <p>
          Technology is one of the most impactful, evolving fields in human
          history. Here's some food for thought.
        </p>

        <br />
        <section>
          <h1 className="font-bold">Future</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLUX-sja_eqhTwFEdyu9bBTeWgo3FTxFDz"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Future of X by Kevin Kelly
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://waitbutwhy.com/2017/04/neuralink.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neuralink and the Brain's Magical Future by Tim Urban
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Present</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://kk.org/thetechnium/you-are-not-late/"
                target="_blank"
                rel="noopener noreferrer"
              >
                You Are Not Late by Kevin Kelly
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://stratechery.com/2023/ai-and-the-big-five/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI and the Big Five by Stratechery
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
        <br />
        <section>
          <h1 className="font-bold">Past</h1>
          <ul className="pl-5 list-disc">
            <li>
              <Link href="/library/dream-machine">
                The Dream Machine by M. Mitchell Waldrop
              </Link>
            </li>
            <li>
              <a
                href="https://www.amazon.com/Chip-Americans-Invented-Microchip-Revolution/dp/0375758283"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Chip by T.R. Reid
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/The_Innovator%27s_Dilemma"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Innovator's Dilemma by Clayton Christensen
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
      </Seed>
    </>
  );
};

export default tech;
