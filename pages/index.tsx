import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {

  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="text-primary ml-20">
          <p></p>
        </section>
      </Layout>
    </>
  );
}