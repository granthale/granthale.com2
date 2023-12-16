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
      <p>If I had to choose a place to start, I would suggest:</p>
    </>
  );
};

export default Default;
