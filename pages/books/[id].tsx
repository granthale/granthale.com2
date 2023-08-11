import Layout from "../../components/Layout";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllBookIds, getBookData } from "../../utils/books";
import Link from "next/link";

export default function Book({
  bookData,
}: {
  bookData: {
    title: string;
    author: string;
    summary: string;
    rating: string;
    id: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{bookData.title}</title>
      </Head>
      <article>
        <div className="md:flex md:justify-between">
          {/* Title, author, summary */}
          <div className="flex-grow">
            {/* Title and author */}
            <div>
              <h1 className="font-bold text-violet text-3xl">
                {bookData.title}
              </h1>
              <h2 className="text-violet text-2xl">by {bookData.author}</h2>
            </div>
            <br />
            {/* summary */}
            <p className="text-xl">{bookData.summary}</p>
            <br />
            <br />
          </div>
          {/* image */}
          <div className="flex-none md:ml-4">
            <img
              src={`/books/${bookData.id}.jpeg`}
              alt={`Cover of ${bookData.title}`}
              width={150}
            />
          </div>
          <br />
          <br />
        </div>
        <h2 className="font-bold text-violet text-2xl">Notes</h2>
        <br />
        <div
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: bookData.contentHtml }}
        />
      </article>
      <br />
      <br />
      <Link
        className="text-violet underline hover:no-underline text-xl"
        href="/books"
      >
        ← Back to books
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBookIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bookData = await getBookData(params?.id as string);
  return {
    props: {
      bookData,
    },
  };
};
