import { Head } from "next/document";
import { useRouter } from "next/router";
import styles from "../styles/404.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Custom404() {
  <Head>
    <title>404</title>
  </Head>;

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <>
      <Header page="404" />
      <Layout>
        <div className={styles.container}>
          <h1 className="text-4xl text-neon-green">404 - Page not found.</h1>
          <br />
          <h1>
            {" "}
            <span className="ascii text-3xl">(╯°□°）╯︵ ┻━┻</span>
          </h1>
          <br />
          <button className="text-3xl hover:text-neon-green" onClick={goBack}>
            Go back
          </button>
        </div>
      </Layout>
    </>
  );
}
