import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getSortedData } from "../../utils/usePosts";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";
import { returnBooks, sortBooks } from "../../utils/libraryUtils";

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

  const handleSortChange = (e) => {
    sortBooks(sortedBooks, setSortedBooks, e.target.value);
    setCriteria(e.target.value);
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
          {returnBooks(sortedBooks, criteria)}

          <br />
          <Link href="/seeds">← For more, see my seeds</Link>
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
