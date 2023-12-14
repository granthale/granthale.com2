import Layout from "../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Text from "../../components/Text";
import Header from "../../components/Header";
import { getAllIds, getData } from "../../utils/usePosts";

interface Book {
  title: string;
  author: string;
  summary: string;
  dateFinished: string;
  contentHTML: string;
  rating: string;
  id: string;
}

export default function Book({ bookData }: { bookData: Book }) {
  return (
    <Layout>
      <Header page={`books: ${bookData.title}`} />
      <article>
        <div className="md:flex md:justify-between">
          {/* Title, author, summary */}
          <div className="flex-grow">
            {/* Title and author */}
            <div>
              <h1 className="font-bold text-violet text-3xl">
                {bookData.title}{" "}
                <span className="text-violet text-2xl font-normal">
                  by {bookData.author}
                </span>
              </h1>
              <br />
              <div className="md:flex md:justify-between">
                <h2 className="font-light text-2xl">
                  Rating: {bookData.rating}/10
                </h2>
                <h2 className="font-light text-2xl">
                  Date Finished: {bookData.dateFinished}
                </h2>
              </div>
            </div>
            <br />
            {/* summary */}
            <p className="text-xl font-bold">{bookData.summary}</p>
          </div>
          {/* image */}
          <div className="flex-none md:ml-4">
            <br />
            <br />
            <img
              src={`/books/${bookData.id}.jpeg`}
              alt={`Cover of ${bookData.title}`}
              width={150}
            />
          </div>
          <br />
          <br />
        </div>
        <div className="md:mt-16">
          <Text contentHTML={bookData.contentHTML} />
        </div>
      </article>
      <br />
      <br />
      <Link className="text-violet text-xl" href="/books">
        ← Back to books
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds("books");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bookData = await getData<Book>(params?.id as string, "books");
  return {
    props: {
      bookData,
    },
  };
};
