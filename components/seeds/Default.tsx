import ExternalArrow from "../ExternalArrow";

const Default = (main_color) => {
  return (
    <>
      <p>
        I like to think of{" "}
        <a
          href="https://www.mentalnodes.com/a-gardening-guide-for-your-mind"
          className={`hover:${main_color} font-bold`}
          target="_blank"
          rel="noopener noreferrer"
        >
          ideas as seeds
          <ExternalArrow></ExternalArrow>
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
    </>
  );
};

export default Default;
