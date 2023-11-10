import Layout from "../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllIds, getData } from "../../utils/usePosts";
import Link from "next/link";
import Text from "../../components/Text";
import Header from "../../components/Header";

export interface Countries {
  title: string;
  date: string;
  id: string;
}

export default function travel({
  travelData,
}: {
  travelData: {
    title: string;
    date: string;
    contentHTML: string;
    id: string;
  };
}) {
  return (
    <Layout>
      <Header page={`travel: ${travelData.title}`} />
      <article>
        <h1 className="font-bold text-violet text-3xl">{travelData.title} </h1>
        <h3 className="text-xl">{travelData.date}</h3>
        <br />
        <Text contentHTML={travelData.contentHTML} />
      </article>
      <br />
      <br />
      <Link className="text-violet text-xl" href="/travel">
        ← Back to travel
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds("travel");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const travelData = await getData<Countries>(params?.id as string, "travel");
  return {
    props: {
      travelData,
    },
  };
};
