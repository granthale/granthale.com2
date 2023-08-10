import Layout from "../../components/Layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIds, getPostData } from "../../utils/posts";
import Link from "next/link";
import styles from "../../styles/Layout.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <br />
      <article>
        <h1 className="font-bold text-2xl">{postData.title}</h1>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <br />
      <br />
      <Link className="text-blue underline hover:no-underline" href="/books">
        ← Back to books
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
