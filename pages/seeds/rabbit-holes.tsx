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
          <h1 className="font-bold">Science</h1>
          <ul className="pl-5 list-disc">
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
                href="https://ourworldindata.org/life-expectancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Life Expectancy by Our World in Data
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://www.theatlantic.com/science/archive/2018/11/diminishing-returns-science/575665/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Science Is Getting Less Bang for Its Buck
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
            <li>
              <a
                href="https://www.youtube.com/watch?v=BShvYeyMm_Y&t=1s"
                target="_blank"
                rel="noopener noreferrer"
              >
                How America became a superpower by Vox
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Basically everything</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://patrickcollison.com/bookshelf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pat Collison's Bookshelf
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
