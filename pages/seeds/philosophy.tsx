import Link from "next/link";
import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";
import Seed from "../../components/Seed";

const philosophy = () => {
  return (
    <>
      <Header page="seeds | philosophy" />
      <Seed selected="Philosophy">
        <p>
          Historically I haven't given philosophy much of a chance, but as of
          late 2023, it's been one of my most frequented genres. Here are some
          of the pieces that have effected my thinking the most.
        </p>

        <br />
        <section>
          <h1 className="font-bold">Philosophy of Science</h1>
          <ul className="pl-5 list-disc">
            <li>
              <Link
                href="/library/beginning-of-infinity"
              >
                The Beginning of Infinity by David Deutsch
              </Link>
            </li>
            <li>
              <a
                href="https://www.bretthall.org/fallibilism.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brett Hall's Entire Website
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Quality</h1>
          <ul className="pl-5 list-disc">
            <li>
              <Link
                href="/library/zen-and-cycles"
              >
                Zen and the Art of Motorcycle Maintenance
              </Link>
            </li>
            <li>
              <a
                href="https://www.joincolossus.com/blog/posts/growth-without-goals?ref=candosts-space"
                target="_blank"
                rel="noopener noreferrer"
              >
                Growth Without Goals by Patrick O'Shaughnessy
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.com/As-One-Free-Mind-Conditioning/dp/1890772623"
                target="_blank"
                rel="noopener noreferrer"
              >
                As One Is by Jiddu Krishnamurti
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Misc</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://waitbutwhy.com/2014/12/what-makes-you-you.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                What Makes You You? by Tim Urban
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=Zz70rcguxwk"
                target="_blank"
                rel="noopener noreferrer"
              >
                68 Bits of Unsolicited Advice by Kevin Kelly
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
      </Seed>
    </>
  );
};

export default philosophy;
