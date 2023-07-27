import Layout from "../components/layout";

export default function About() {
  const sidebar = <div className="text-neon-green font-bold text-3xl">About me</div>
  return (
    <>
      <Layout color="neon-green" sidebar={sidebar}>My name is Grant</Layout>
    </>
  );
}
