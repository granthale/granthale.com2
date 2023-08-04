import Layout from "../components/Layout";
import Header from "../components/Header";
import Arrow from "../components/Arrow";
import { books } from "../data/books";
import { people } from "../data/people";
import { podcasts } from "../data/podcasts";

export default function Influences() {
  const sidebar = (
    <div className="text-waving-brown font-bold text-3xl">Influences</div>
  );

  const main_color = "text-violet";
  return (
    <>
      <Header page="influences" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>influences!</h1>
        <br />
        <div className="text-xl">
          <p>
            I like to think of <span className="font-bold">ideas as seeds</span>{" "}
            planted by our influences and nourished by curiosity, contemplation,
            and exploration.
          </p>
          <br />
          <p>
            These seeds, when shared with others through discussion and
            creation, have the power to take root and become a{" "}
            <span className="font-bold">collective intellectual forest.</span>
          </p>
          <br />
          <p className={`${main_color} font-bold`}>
            Here are some of the books and people that have provided me with
            seeds as a person and thinker:
          </p>
        </div>
        <br />
        <br />
        <h1 className={`font-bold ${main_color} text-3xl`}>people</h1>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {people.map((person) => (
            <li className="underline hover:text-primary" key={person.name}>
              <a href={person.link} target="_blank" rel="noopener noreferrer">
                {person.name}
                <Arrow></Arrow>
              </a>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <h1 className={`font-bold ${main_color} text-3xl`}>books</h1>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {books.map((book) => (
            <li className="underline hover:text-primary" key={book.name}>
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                {book.name}
              </a>{" "}
              by {book.author}
              <Arrow></Arrow>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <h1 className={`font-bold ${main_color} text-3xl`}>podcasts</h1>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {podcasts.map((podcast) => (
            <li className="underline hover:text-primary" key={podcast.name}>
              <a href={podcast.link} target="_blank" rel="noopener noreferrer">
                {podcast.name}
              </a>{" "}
              by {podcast.author}
              <Arrow></Arrow>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
