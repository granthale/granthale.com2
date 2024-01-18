import Header from "../../components/Header";
import Layout from "../../components/Layout";

export default function Seeds() {
  return (
    <>
      <Header page="seeds" />
      <Layout>
        <div className="flex flex-col md:flex-row p-5 w-full h-auto relative z-20 min-h-screen">
          <div className="w-full md:w-1/3 top-5 h-auto self-start md:sticky hidden md:block"></div>
        </div>
      </Layout>
    </>
  );
}
