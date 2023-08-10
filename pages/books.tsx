import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getAllBookIds, getSortedBooksData } from "../utils/books";
import Header from "../components/Header";
import Layout from "../components/Layout";
import BookCard from "../components/BookCard/BookCard";

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
            <p className="text-xl">
              These are notes on the books that I've read. I've tried to keep
              them as concise as possible, but I've also tried to include the
              most important points. I hope you find them useful!
            </p>
            <br />
            <p className="text-xl">Sort by:</p>
            <ul className="list-disc">
              <li className="text-xl">
                <a href="#rating">Rating</a>
              </li>
              <li className="text-xl">
                <a href="#author">Author</a>
              </li>
              <li className="text-xl">
                <a href="#title">Title</a>
              </li>
            </ul>
            <br />
          </div>
          <ul className="list-disc">
            {allBooksData.map(
              ({ id, title, author, summary, rating, href }) => (
                <BookCard
                  id={id}
                  title={title}
                  author={author}
                  summary={summary}
                  rating={rating}
                  href={href}
                ></BookCard>
              )
            )}
          </ul>
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
