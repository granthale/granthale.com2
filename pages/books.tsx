import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getSortedBooksData } from "../utils/books";
import Header from "../components/Header";
import Layout from "../components/Layout";
import BookCard from "../components/BookCard/BookCard";
import Link from "next/link";

const books = ({
  allBooksData,
}: {
  allBooksData: {
    title: string;
    author: string;
    summary: string;
    id: string;
    rating: string;
    href: string;
  }[];
}) => {
  return (
    <>
      <Header page="books" />
      <Layout>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="text-violet">
            <h1 className="text-3xl font-bold">Books</h1>
            <br />
            <p className="text-xl">Sorting coming soon...</p>
            {/*  by: (rating, title, recency) */}
            <br />
          </div>
          {allBooksData.map(({ id, title, author, summary, rating, href }) => (
            <BookCard
              key={id}
              id={id}
              title={title}
              author={author}
              summary={summary}
              rating={rating}
            ></BookCard>
          ))}
          <br />
          <Link
            className="text-violet underline hover:no-underline"
            href="/influences"
          >
            ← Back to influences
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
