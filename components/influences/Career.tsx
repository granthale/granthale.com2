import ExternalArrow from "../ExternalArrow";

const Career = () => {
  return (
    <>
      <ul className="ml-4">
        <li>
          <a
            href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            You and Your Research by Richard Hamming
            <ExternalArrow />
          </a>
        </li>
        <li>
          <a
            href="http://paulgraham.com/love.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Do What You Love by Paul Graham
            <ExternalArrow />
          </a>
        </li>
        <li>
          <a
            href="http://www.paulgraham.com/greatwork.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Do Great Work by Paul Graham
            <ExternalArrow />
          </a>
        </li>
        <li>
          <a
            href="http://norvig.com/21-days.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teach Yourself Programming in 10 Years by Peter Norvig{" "}
            <ExternalArrow />
          </a>
        </li>
        <li>
          <a
            href="https://waitbutwhy.com/2015/11/the-cook-and-the-chef-musks-secret-sauce.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Cook and the Chef: Musk's Secret Sauce by Tim Urban
            <ExternalArrow />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Career;
