import Layout from "../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllMusingIds, getMusingsData } from "../../utils/musings";
import Link from "next/link";
import Text from "../../components/Text";
import Header from "../../components/Header";

export default function writing({
  musingData,
}: {
  musingData: {
    title: string;
    date: string;
    contentHTML: string;
    id: string;
  };
}) {
  return (
    <Layout>
      <Header page={`writing: ${musingData.title}`} />
      <article>
        <h1 className="font-bold text-violet text-3xl">{musingData.title} </h1>
        <h3 className="text-xl">{musingData.date}</h3>
        <br />
        <Text contentHTML={musingData.contentHTML} />
      </article>
      <br />
      <br />
      <Link
        className="text-violet underline hover:no-underline text-xl"
        href="/writing"
      >
        ← Back to writing
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMusingIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const musingData = await getMusingsData(params?.id as string);
  return {
    props: {
      musingData,
    },
  };
};
