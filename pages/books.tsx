import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../utils/posts";
import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";
import BookCard from "../components/BookCard/BookCard";

const books = ({
  allPostsData,
}: {
  allPostsData: {
    title: string;
    author: string;
    summary: string;
    id: string;
    rating: string;
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
            {allPostsData.map(({ id, title, author, summary, rating }) => (
              <BookCard
                id={id}
                title={title}
                author={author}
                summary={summary}
                rating={rating}
              ></BookCard>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default books;
