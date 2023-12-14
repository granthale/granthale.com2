import ExternalArrow from "../ExternalArrow";

const Writing = () => {
  return (
    <>
      <ul className="ml-4">
        <li>
          <a
            href="https://notes.andymatuschak.org/Evergreen_notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Evergreen Notes by Andy Matuschak
            <ExternalArrow />
          </a>
        </li>
        <li>
          <a
            href="https://zettelkasten.de/introduction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zettelkasten
            <ExternalArrow />
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.com/Writing-Well-Classic-Guide-Nonfiction/dp/0060891548"
            target="_blank"
            rel="noopener noreferrer"
          >
            On Writing Well by William Zinsser
            <ExternalArrow />
          </a>
        </li>
        <li>
          <a
            href="https://guzey.com/personal/why-have-a-blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Why You Should Start A Blog Right Now by Alexey Guzey
            <ExternalArrow />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Writing;
