import Layout from "../components/layout";
import Link from "next/link";

export default function About() {
  const sidebar = (
    <div className="text-neon-green font-bold text-3xl">About me</div>
  );

  const locations = [
    { month: "May", location: "Chicago" },
    {
      month: "June",
      location: "Iceland, Amsterdam, Norway, London, France, and Italy",
    },
    { month: "July", location: "San Francisco" },
    { month: "August", location: "San Francisco, Chicago" },
    { month: "September", location: "Vietnam?" },
    { month: "October", location: "Japan?" },
    { month: "November", location: "Spain?" },
    { month: "December", location: "???" },
  ];
  return (
    <>
      <Layout sidebar={sidebar}>
        <h1 className="font-bold text-neon-green text-3xl">about!</h1>
        <br />
        <p className="text-lg text-gray">
          I graduated in May 2023 from the University of Illinois with a major
          in finance and a minor in computer science.
        </p>
        <br />
        <p className="text-lg text-gray">
          To those who say college is becoming outdated, I truly don't know
          where I would be without the people I met and the (main)character that
          I developed.
        </p>
        <br />
        <h3 className="font-bold text-neon-green text-3xl">Time & Location</h3>
        <br />
        {locations.map((location) => (
          <>
            <div className="text-lg text-gray">
              <span className="font-bold">{location.month}:</span>{" "}
              {location.location}
            </div>
          </>
        ))}
        <br />
        <h3 className="font-bold text-neon-green text-3xl">Energy</h3>
        <br />
        <p className="text-lg text-gray">
          Here are the things that I'm currently putting energy into:
        </p>
        <br />

        <ul className="list-disc text-gray pl-5 text-lg">
          <li>
            Recording podcast episodes for{" "}
            <Link
              href="https://podcasters.spotify.com/pod/show/surfacetensionpod"
              className="underline hover:text-primary"
              target="_blank"
            >
              Surface Tension
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="https://treetoforest.substack.com/"
              target="_blank"
              className="underline hover:text-primary"
            >
              Writing
            </Link>{" "}
            @ least 15 minutes a day - ideally closer to an hour
          </li>
          <li>Honing my full-stack development skills using Next.js.</li>
          <li>Reading like a madman</li>
        </ul>
      </Layout>
    </>
  );
}
