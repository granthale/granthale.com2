import ExternalArrow from "../ExternalArrow";

const Curiosities = () => {
  return (
    <>
      <p>
        These are pages, while not serving any explicit purpose, have ignited my
        curiosity. I hope they'll do the same for you.
      </p>
      <br />
      <ul className="ml-4">
        <li>
          <a
            href="http://worrydream.com/LadderOfAbstraction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Up and Down the Ladder of Abstraction
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
            href="https://ncase.me/trust/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Evolution of Trust by Nick Case
            <ExternalArrow />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Curiosities;
