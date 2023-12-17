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
  const handleSortChange = (e) => {
    sortBooks(e.target.value);
  };
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

  return (
    <>
      <Header page="library" />
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="flex justify-between text-xl">
            <div>
              <h1 className="text-4xl font-extrabold">library!</h1>
              <br />
              <p>
                Some of the pages below will contain raw or structural notes.
                Every one will contain the book's unity and my personal rating.
                The rating is an approximation of how often I find myself
                revisiting the books's ideas, and how much the book has
                influenced my thinking.
              </p>
              <br />
              <p>
                Reach out if you'd like to know what I'm currently reading and
                keep an eye on my <Link href="/influences">influences</Link>{" "}
                tab.
              </p>
              <br />
              <div className="flex items-center">
                <p className="mr-4">Sort by:</p>
                <select
                  id="sorting"
                  defaultValue="title"
                  onChange={handleSortChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="title">Title</option>
                  <option value="rating">Rating</option>
                  <option value="recency">Recency</option>
                </select>
              </div>
            </div>
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
          <Link href="/influences">← For more</Link>
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
