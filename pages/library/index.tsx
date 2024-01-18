"use client";

import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

import Header from "../../components/Header";
import utilStyles from "../../styles/utils.module.css";
import { getSortedData } from "../../utils/usePosts";
import Layout from "../../components/Layout";
import { returnBooksWFormatting, sortBooks } from "../../utils/libraryUtils";

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
  const [criteria, setCriteria] = useState("title");

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
              <h1 className={`text-4xl font-extrabold ${main_color} mb-4`}>
                library!
              </h1>
              <p className="mb-4">
                Each book will contain the book's unity and my personal rating
                along with notes of various kinds. The{" "}
                <span className="font-bold">unity</span> refers to the essence
                of the book. My <span className="font-bold">rating</span>{" "}
                approximates how often I revisit the books's ideas.
              </p>
              <p className="font-bold mb-4">
                Reach out if you'd like to know what I'm currently reading and
                keep an eye on my{" "}
                <Link href="/seeds" className="font-bold">
                  seeds
                </Link>{" "}
                tab!
              </p>
              <div className="flex items-center">
                <p className="mr-4">Sort by:</p>
                <select
                  id="sorting"
                  defaultValue="title"
                  onChange={handleSortChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                >
                  <option value="title">Title</option>
                  <option value="rating">Rating</option>
                  <option value="recency">Recency</option>
                </select>
              </div>
            </div>
          </div>

          <br />
          {returnBooksWFormatting(sortedBooks, criteria)}

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
