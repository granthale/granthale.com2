import Layout from "../components/layout";

export default function Writing() {
  const sidebar = <div className="text-tealish text-3xl font-bold">Writing</div>
  return (
    <>
      <Layout color="tealish" sidebar={sidebar}>Writing</Layout>
    </>
  );
}