import Layout from "../components/Layout";
import PodCard from "../components/PodCard";

const podcast = () => {
  return (
    <Layout>
      <div className="text-waving-brown font-bold text-3xl">podcast!</div>
      <br />
      <div className="text-gray text-xl">Sharad Doshi and I have been working on Surface Tension for a little under a year now. Here are the episodes that we've currently released.</div>
      <br />
      <PodCard />
    </Layout>
  );
};

export default podcast;
