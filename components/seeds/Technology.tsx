import ExternalArrow from "../ExternalArrow";

const Technology = () => {
  return (
    <>
      <p>
        Technology is one of the most impactful, evolving fields in human
        history. Here's some food for thought.
      </p>

      <br />
      <section>
        <h1 className="font-bold">Future</h1>
        <ul className="ml-4">
          <li>
            <a
              href="https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              My techno-optimism by Vitalik Buterin
              <ExternalArrow />
            </a>
          </li>
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
        <h1 className="font-bold">Today</h1>
        <ul className="ml-4">
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
        </ul>
      </section>
    </>
  );
};

export default Technology;
