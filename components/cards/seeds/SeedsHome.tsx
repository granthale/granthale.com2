import ExternalArrow from "../../ExternalArrow";
import Seed from "./Seed";

const SeedsHome = () => {
  return (
    <Seed selected="">
      <img src="/seed.png" className="float-left w-12 mr-8" alt="Seed" />
      <p>
        I like to think of{" "}
        <a
          href="https://www.mentalnodes.com/a-gardening-guide-for-your-mind"
          target="_blank"
          rel="noopener noreferrer"
        >
          ideas as seeds
          <ExternalArrow />
        </a>{" "}
        planted by our influences and nourished by curiosity, contemplation, and
        exploration.
      </p>
      <br />
      <p>
        Here are some of the works and people that have provided me with seeds
        as a person and professional.{" "}
        <span className="font-bold">
          Click through to see them by category.
        </span>
      </p>

      <br />
      <p>
        Let me know if you find anything you like, or there's anything that I
        should check out!{" "}
      </p>
    </Seed>
  );
};

export default SeedsHome;
