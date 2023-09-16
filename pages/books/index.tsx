import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getSortedBooksData } from "../../utils/books";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import BookCard from "../../components/Books/BookCard";
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
  const main_color = "";
  return (
    <>
      <Header page="books" />
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={`flex justify-between ${main_color}`}>
            <div>
              <h1 className="text-4xl font-extrabold">books!</h1>
              <br />
              <div className="flex items-center">
                <p className="mr-4">Sort by:</p>
                <select
                  id="sorting"
                  onChange={handleSortChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="rating" selected>
                    Rating
                  </option>
                  <option value="recency">Recency</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
            <Link
              className="text-right underline hover:no-underline ml-4"
              href="/influences"
            >
              ← To influences
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
            ← To influences
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
