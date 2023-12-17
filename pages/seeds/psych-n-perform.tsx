import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";
import Seed from "../../components/Seed";

const psychNPerform = () => (
  <>
    <Header page="seeds | psych & performance" />
    <Seed>
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
            <a
              href="https://www.joshwaitzkin.com/the-art-of-learning"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Art of Learning by Josh Waitzkin
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>

      <br />
      <section>
        <h1 className="font-bold">Productivity</h1>
        <ul className="pl-5 list-disc">
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
        <h1 className="font-bold">Emotional Understanding</h1>
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
        <h1 className="font-bold">Evolutionary</h1>
        <ul className="pl-5 list-disc">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              The Elephant in the Brain by Simler & Hanson
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>
    </Seed>
  </>
);

export default psychNPerform;
