import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getSortedBooksData } from "../utils/books";
import Header from "../components/Header";
import Layout from "../components/Layout";
import BookCard from "../components/Books/BookCard";
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

  const sortBooks = (criteria) => {
    const sorted = [...sortedBooks].sort((a, b) => {
      if (criteria === "rating") {
        return b.rating - a.rating;
      } else if (criteria === "title") {
        return a.title.localeCompare(b.title);
      } else if (criteria === "recency") {
        return +new Date(b.dateFinished) - +new Date(a.dateFinished);
      } else {
        return 0;
      }
    });
    setSortedBooks(sorted);
  };
  const main_color = "text-violet";
  const button_class = "text-blue underline hover:no-underline";
  return (
    <>
      <Header page="books" />
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={`flex justify-between ${main_color}`}>
            <div>
              <h1 className="text-4xl font-extrabold">books!</h1>
              <br />
              <p>Here are some books that I've read recently!</p>
              <p className="font-bold">
                Sort by{" "}
                <button
                  className={`${button_class}`}
                  onClick={() => sortBooks("rating")}
                >
                  rating
                </button>
                ,{" "}
                <button
                  className={`${button_class}`}
                  onClick={() => sortBooks("title")}
                >
                  title
                </button>
                , or{" "}
                <button
                  className={`${button_class}`}
                  onClick={() => sortBooks("recency")}
                >
                  recency
                </button>
              </p>
            </div>
            <Link
              className="text-right underline hover:no-underline"
              href="/influences"
            >
              ← To other influences
            </Link>
          </div>
          <br />
          {sortedBooks.map(
            ({ id, title, author, dateFinished, summary, rating }) => (
              <BookCard
                key={id}
                title={title}
                author={author}
                dateFinished={dateFinished}
                summary={summary}
                rating={rating}
                id={id}
              ></BookCard>
            )
          )}
          <br />
          <Link
            className="text-violet underline hover:no-underline"
            href="/influences"
          >
            ← To other influences
          </Link>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allBooksData = getSortedBooksData();
  return {
    props: {
      allBooksData,
    },
  };
};

export default books;
