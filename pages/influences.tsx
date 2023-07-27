import Layout from "../components/layout";

export default function Influences() {
  const sidebar = (
    <div className="text-waving-brown font-bold text-3xl">Influences</div>
  );
  return (
    <>
      <Layout color="waving-brown" sidebar={sidebar}>What has influenced me</Layout>
    </>
  );
}
