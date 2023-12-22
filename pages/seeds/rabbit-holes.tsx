import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";
import Seed from "../../components/Seed";

const rabbitHoles = () => {
  return (
    <>
      <Header page="seeds | rabbit holes" />
      <Seed selected="Rabbit Holes">
        <p className="font-bold">
          “I almost wish I hadn't gone down that rabbit-hole—and yet—and
          yet—it's rather curious, you know, this sort of life!”
        </p>
        <br />
        <p>
          Below are some of the most interesting, curiosity-inducing entry
          points that I've found and the fields that they relate to.
        </p>

        <br />
        <section>
          <h1 className="font-bold">Biology</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/The_Selfish_Gene"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Selfish Gene by Richard Dawkins
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://jsomers.net/i-should-have-loved-biology"
                target="_blank"
                rel="noopener noreferrer"
              >
                I should have loved Biology by James Somers
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Design</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="http://worrydream.com/LadderOfAbstraction/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Up and Down the Ladder of Abstraction by Bret Victor
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
        <br />
        <section>
          <h1 className="font-bold">Science & Physics</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://waitbutwhy.com/2016/03/sound.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Everything You Should Know About Sound by Tim Urban
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://meltingasphalt.com/interactive/going-critical/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Going Critical by Kevin Simler
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://ourworldindata.org/life-expectancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Life Expectancy by Our World in Data
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Game Theory</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://ncase.me/trust/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Evolution of Trust by Nick Case
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">American History</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://collabfund.com/blog/how-this-all-happened/"
                target="_blank"
                rel="noopener noreferrer"
              >
                How This All Happened by Morgan Housel
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Lies_My_Teacher_Told_Me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lies My Teacher Told Me by James W. Loewen
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
      </Seed>
    </>
  );
};

export default rabbitHoles;
