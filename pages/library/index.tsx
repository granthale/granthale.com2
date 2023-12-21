import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getSortedData } from "../../utils/usePosts";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import BookCard from "../../components/cards/BookCard";
import Link from "next/link";
import { useState } from "react";

const books = ({
  allBooksData,
}: {
  allBooksData: {
    title: string;
    author: string;
    dateFinished: string;
    summary: string;
    rating: number;
    id: string;
  }[];
}) => {
  const [sortedBooks, setSortedBooks] = useState(allBooksData);
  const [criteria, setCriteria] = useState("rating");

  function compareBooks(a, b) {
    const isWIP = (date) => date === "WIP";

    if (isWIP(a.dateFinished) && isWIP(b.dateFinished)) {
      return 0; // Both are WIP, so order doesn't matter between them
    } else if (isWIP(a.dateFinished)) {
      return -1; // a is WIP, so it should be sorted after b
    } else if (isWIP(b.dateFinished)) {
      return 1; // b is WIP, so it should be sorted after a
    } else {
      // Your existing logic for comparing dates
      return +new Date(b.dateFinished) - +new Date(a.dateFinished);
    }
  }

  const handleSortChange = (e) => {
    sortBooks(e.target.value);
    setCriteria(e.target.value);
  };

  const sortBooks = (criteria) => {
    const sorted = [...sortedBooks].sort((a, b) => {
      if (criteria === "rating") {
        return b.rating - a.rating;
      } else if (criteria === "title") {
        return a.title.localeCompare(b.title);
      } else if (criteria === "recency") {
        return compareBooks(a, b);
      } else {
        return 0;
      }
    });
    setSortedBooks(sorted);
  };

  const returnBooksWRatings = (r) => {
    if (r === -1) {
      return (
        <>
          {sortedBooks
            .filter(
              ({ rating }) => rating !== 10 && rating !== 9 && rating !== 8
            )
            .map(({ id, title, dateFinished }) => (
              <div className="p-4 italic">
                <p>{dateFinished}</p>
                <BookCard key={id} title={title} id={id}></BookCard>
              </div>
            ))}
        </>
      );
    }
    return (
      <>
        {sortedBooks
          .filter(({ rating }) => rating === r)
          .map(({ id, title, dateFinished }) => (
            <div className="p-4 italic">
              <p>{dateFinished}</p>
              <BookCard key={id} title={title} id={id}></BookCard>
            </div>
          ))}
      </>
    );
  };

  const returnBooks = () => {
    // Would this be better off in an API file? Yes...
    if (criteria === "rating") {
      return (
        <>
          <br />
          <h1 className="font-bold text-2xl">Rating: 10</h1>
          <div className="border"></div>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {returnBooksWRatings(10)}
          </div>

          <br />
          <br />
          <h1 className="font-bold text-2xl">Rating: 9</h1>
          <div className="border"></div>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {returnBooksWRatings(9)}
          </div>

          <br />
          <br />
          <h1 className="font-bold text-2xl">Rating: 8</h1>
          <div className="border"></div>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {returnBooksWRatings(8)}
          </div>

          <br />
          <br />
          <h1 className="font-bold text-2xl">Everything Else</h1>
          <div className="border"></div>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {returnBooksWRatings(-1)}
          </div>
        </>
      );
    }
    if (criteria === "recency") {
      return (
        <>
          <br />
          <h1 className="font-bold text-2xl">Current</h1>
          <div className="border"></div>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sortedBooks
              .filter(({ dateFinished }) => dateFinished === "WIP")
              .map(({ id, title, dateFinished }) => (
                <div className="p-4 italic">
                  <p>{dateFinished}</p>
                  <BookCard key={id} title={title} id={id}></BookCard>
                </div>
              ))}
          </div>

          <br />
          <br />
          <h1 className="font-bold text-2xl">Everything Else</h1>
          <div className="border"></div>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sortedBooks
              .filter(({ dateFinished }) => dateFinished !== "WIP")
              .map(({ id, title, dateFinished }) => (
                <div className="p-4 italic">
                  <p>{dateFinished}</p>
                  <BookCard key={id} title={title} id={id}></BookCard>
                </div>
              ))}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedBooks.map(({ id, title, dateFinished }) => (
            <div className="p-4 italic">
              <p>{dateFinished}</p>
              <BookCard key={id} title={title} id={id}></BookCard>
            </div>
          ))}
        </div>
      </>
    );
  };

  const main_color = "text-blue";

  return (
    <>
      <Header page="library" />
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="flex justify-between text-xl">
            <div>
              <h1 className={`text-4xl font-extrabold ${main_color}`}>
                library!
              </h1>
              <br />
              <p>
                Some of the pages below will contain raw or structural notes.
                Every one will contain the book's unity and my personal rating.
                The rating is an approximation of how often I find myself
                revisiting the books's ideas, and how much the book has
                influenced my thinking.
              </p>
              <br />
              <p className="font-bold">
                Reach out if you'd like to know what I'm currently reading and
                keep an eye on my{" "}
                <Link href="/seeds" className="font-bold">
                  seeds
                </Link>{" "}
                tab!
              </p>
              <br />
              <div className="flex items-center">
                <p className="mr-4">Sort by:</p>
                <select
                  id="sorting"
                  defaultValue="rating"
                  onChange={handleSortChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                >
                  <option value="rating">Rating</option>
                  <option value="recency">Recency</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>

          {/* Separate 10, 9, 8 from rest */}
          <br />
          {returnBooks()}

          <br />
          <Link href="/seeds">← For more, see the garden</Link>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allBooksData = getSortedData("books");
  return {
    props: {
      allBooksData,
    },
  };
};

export default books;
