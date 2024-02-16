import Link from "next/link";
import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";
import Seed from "../../components/Seed";

const psychNPerform = () => (
  <>
    <Header page="seeds | psych & performance" />
    <Seed selected="Psych & Performance">
      <p>
        Even though we spend 100% of our life in our own head, we tend to be "a
        stranger unto ourselves". These pieces, along with putting myself in new
        uncomfortable situations have helped me to better understand myself.
      </p>

      <br />
      <section>
        <h1 className="font-bold">Performance</h1>
        <ul className="pl-5 list-disc">
          <li>
            <Link href="/library/art-of-learning">
              The Art of Learning by Josh Waitzkin
            </Link>
          </li>
        </ul>
      </section>

      <br />
      <section>
        <h1 className="font-bold">Productivity</h1>
        <ul className="pl-5 list-disc">
          <li>
            <a
              href="https://medium.com/@benjaminhardy/want-to-upgrade-your-brain-stop-doing-these-7-things-immediately-136e2d8c8cde"
              target="_blank"
              rel="noopener noreferrer"
            >
              Want To Upgrade Your Brain? by Dr. Benjamin Hardy
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://notes.andymatuschak.org/zUc2ssyE7CrHCFX57zhgpgx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pomodoro Technique by Andy Matuschak
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://jakobgreenfeld.com/personal-productivity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Effortless Personal Productivity by Jakob Greenfeld
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="http://www.paulgraham.com/makersschedule.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maker's Schedule, Manager's Schedule by Paul Graham
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>

      <br />
      <section>
        <h1 className="font-bold">Emotions</h1>
        <ul className="pl-5 list-disc">
          <li>
            <a
              href="https://www.thefriendlymind.com/3-things-about-anxiety-everyone-should-know/"
              target="_blank"
              rel="noopener noreferrer"
            >
              3 Things About Anxiety Everyone Should Know
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://waitbutwhy.com/2014/10/religion-for-the-nonreligious.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Religion for the Nonreligious by Tim Urban
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://www.nytimes.com/2023/09/17/opinion/sports-zen-mental-subtraction.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              When I Stopped Trying to Self-Optimize, I Got Better
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>

      <br />
      <section>
        <h1 className="font-bold">General</h1>
        <ul className="pl-5 list-disc">
          <li>
            <Link href="/library/elephant-in-the-brain">
              The Elephant in the Brain by Simler & Hanson
            </Link>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thinking Fast and Slow by Kahneman and Tversky
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>
    </Seed>
  </>
);

export default psychNPerform;
