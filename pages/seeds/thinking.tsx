import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";
import Seed from "../../components/Seed";

const thinking = () => {
  return (
    <>
      <Header page="seeds | thinking" />
      <Seed selected="Thinking">
        <p>
          Taking time to think every day is one of life's most underrated joys.
          Here are some of the pieces that have most influenced my *cough cough*
          thinking in this realm.
        </p>

        <br />
        <section>
          <h1 className="font-bold">Philosophical</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://theamericanscholar.org/solitude-and-leadership/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solitude and Leadership by William Deresiewicz
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Practical</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://notes.andymatuschak.org/It%E2%80%99s_hard_to_hear_yourself_think"
                target="_blank"
                rel="noopener noreferrer"
              >
                It's hard to hear yourself think by Andy Matuschak
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Brain Gymnasium</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://www.amazon.in/Thinking-Physics-Gedanken-Lewis-Epstein/dp/0935218084"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thinking Physics by Lewis Caroll Epstein
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
      </Seed>
    </>
  );
};

export default thinking;
