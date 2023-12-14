import ExternalArrow from "../ExternalArrow";

const Technology = () => {
  return (
    <ul className="ml-4">
      <li>
        <a
          href="https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          My techno-optimism
          <ExternalArrow />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/playlist?list=PLUX-sja_eqhTwFEdyu9bBTeWgo3FTxFDz"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Future of X<ExternalArrow />
        </a>
      </li>
      <li>
        <a
          href="https://kk.org/thetechnium/you-are-not-late/"
          target="_blank"
          rel="noopener noreferrer"
        >
          You Are Not Late
          <ExternalArrow />
        </a>
      </li>
    </ul>
  );
};

export default Technology;
