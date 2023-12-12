import Layout from "../components/Layout";
import Header from "../components/Header";
import Arrow from "../components/ExternalArrow";
import { books } from "../data/books";
import { people } from "../data/people";
import { podcasts } from "../data/podcasts";
import { essays } from "../data/essays";
import { friends } from "../data/friends";
import Link from "next/link";

export default function Influences() {
  const main_color = "text-violet";

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
              <Arrow></Arrow>
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
        <h1 className={`font-bold ${main_color} text-3xl`}>people</h1>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {people.map((person) => (
            <li className={`hover:${main_color}`} key={person.name}>
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
        <div className="text-xl text-violet">
          <p className="font-bold">
            Click{" "}
            <Link className="" href="/books">
              here
            </Link>{" "}
            for notes on the books that I read.
          </p>
          <p>
            This is a recent habit, and something that should hopefully provide
            you some value!
          </p>
        </div>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {books
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((book) => (
              <li className={`hover:${main_color}`} key={book.name}>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  {book.name} by {book.author}
                </a>
                <Arrow></Arrow>
              </li>
            ))}
        </ul>

        <br />
        <br />
        <h1 className={`font-bold ${main_color} text-3xl`}>
          articles & essays
        </h1>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {essays.map((essay) => (
            <li className={`hover:${main_color}`} key={essay.name}>
              <a href={essay.link} target="_blank" rel="noopener noreferrer">
                {essay.name} by {essay.author}
                <Arrow></Arrow>
              </a>
            </li>
          ))}
        </ul>

        <br />
        <br />
        <h1 className={`font-bold ${main_color} text-3xl`}>podcasts</h1>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {podcasts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((podcast) => (
              <li className={`hover:${main_color}`} key={podcast.name}>
                <a
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {podcast.name} by {podcast.author}
                </a>
                <Arrow></Arrow>
              </li>
            ))}
        </ul>

        <br />
        <br />
        <h1 className={`font-bold ${main_color} text-3xl`}>friends</h1>
        <br />
        <p className={`${main_color} text-xl`}>
          Here are some good friends with personal websites!
        </p>
        <br />
        <ul className="list-disc pl-5 text-xl">
          {friends.map((friend) => (
            <li className={`hover:${main_color}`} key={friend.name}>
              <a href={friend.link} target="_blank" rel="noopener noreferrer">
                {friend.name}
                <Arrow></Arrow>
              </a>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
