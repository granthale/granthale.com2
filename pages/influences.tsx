import Layout from "../components/Layout";
import Header from "../components/Header";
import ExternalArrow from "../components/ExternalArrow";

export default function Influences() {
  const main_color = "text-violet";
  const subjects = [ "Knowledge", "Learning", "Writing", "Thinking", "Friends & People", "Psychology & Performance", "Philosophy", "Career", "Future", "Other"] 
  return (
    <>
      <Header page="influences" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>influences!</h1>
        <br />
        <div className="text-xl">
          <p>
            I like to think of ideas as{" "}
            <a
              href="https://www.mentalnodes.com/a-gardening-guide-for-your-mind"
              className={`hover:${main_color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              seeds
              <ExternalArrow></ExternalArrow>
            </a>{" "}
            planted by our influences and nourished by curiosity, contemplation,
            and exploration.
          </p>
          <br />
          <p>
            These seeds, when shared with others through discussion and
            creation, have the power to take root and become an{" "}
            <span className="font-bold"> intellectual forest.</span>
          </p>
          <br />
          <p className={`${main_color} font-bold`}>
            Here are some of the works and people that have provided me with
            seeds and nourishment as a person and professional.
          </p>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-3 gap-4">
          <ul>
            {}
          </ul>
          <div className="col-span-2">Hello</div>
        </div>
      </Layout>
    </>
  );
}
