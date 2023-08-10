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
          <h2 className="text-2xl font-bold">Books</h2>
          <br />
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
