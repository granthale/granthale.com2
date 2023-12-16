import ExternalArrow from "../ExternalArrow";

const Learning = () => {
  return (
    <>
      <p>
        In the middle of 2023, I dove deep on learning to learn more
        effectively. Here are some of my favorite resources.
      </p>

      <br />
      <section>
        <h1 className="font-bold">Holy Grail</h1>
        <ul className="ml-4">
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
        <h1 className="font-bold text-xl">On Reading</h1>
        <ul className="ml-4">
          <li>
            <a
              href="https://www.amazon.com/How-Read-Book-Classic-Intelligent/dp/0671212095"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to Read a Book by Adler & Van Doren
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://sirupsen.com/read"
              target="_blank"
              rel="noopener noreferrer"
            >
              How I Read by Simon Hørup Eskildsen
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://jsomers.net/blog/book-clubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Most book clubs are doing it wrong by James Somers
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://sive.rs/bfaq"
              target="_blank"
              rel="noopener noreferrer"
            >
              About My Book Notes by Derek Sivers
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>

      <br />
      <section>
        <h1 className="font-bold text-xl">On Spaced Repetition</h1>
        <ul className="ml-4">
          <li>
            <a
              href="http://augmentingcognition.com/ltm.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Augmenting Long-term Memory by Michael Nielsen
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://andymatuschak.org/prompts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to write good prompts by Andy Matuschak
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://gwern.net/spaced-repetition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spaced Repetition for Efficient Learning by Gwern
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://sirupsen.com/playlists/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Media Playlists by Simon Hørup Eskildsen
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://podcasts.apple.com/us/podcast/dwarkesh-podcast-lunar-society-formerly/id1516093381?i=1000620902710"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andy Matuschak - Self Teaching, Spaced Repetition by Dwarkesh
              Patel
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>

      <br />
      <section>
        <h1 className="font-bold text-xl">Internet Corners</h1>
        <ul className="ml-4">
          <li>
            <a
              href="https://andymatuschak.org/"
              target="_blank"
              rel="noopenr noreferrer"
            >
              Andy Matuschak
              <ExternalArrow />
            </a>
            ,{" "}
            <a
              href="https://notes.andymatuschak.org/About_these_notes"
              target="_blank"
              rel="noopenr noreferrer"
            >
              Andy Matuschak's Working Notes
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="http://worrydream.com/"
              target="_blank"
              rel="noopenr noreferrer"
            >
              Bret Victor
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://gwern.net/"
              target="_blank"
              rel="noopenr noreferrer"
            >
              Gwern Branwen
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://www.joshwaitzkin.com/"
              target="_blank"
              rel="noopenr noreferrer"
            >
              Josh Waitzkin
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Learning;
