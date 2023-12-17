import Link from "next/link";
import Layout from "./Layout";

// Put main color back in original file
// Add headers to each file

const Seed = ({ children }) => {
  const main_color = "text-violet";

  const subjects = [
    { title: "Rabbit Holes", link: "rabbit-holes" },
    { title: "Learning to Learn", link: "learning" },
    { title: "Writing", link: "writing" },
    { title: "Thinking", link: "thinking" },
    { title: "Friends & People", link: "friends-n-people" },
    { title: "Psych & Performance", link: "psych-n-perform" },
    { title: "Philosophy", link: "philosophy" },
    { title: "Career", link: "career" },
    { title: "Technology", link: "tech" },
  ];

  return (
    <>
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>
          <Link href="/seeds">seeds!</Link>
        </h1>
        <br />
        <div className="grid grid-cols-3 gap-4 text-xl">
          <ul>
            {subjects.map((subject) => (
              <li
                key={subject.title}
                className="hover:text-black hover:font-bold hover:cursor-pointer"
              >
                <Link href={`/seeds/${subject.link}`}>{subject.title}</Link>
              </li>
            ))}
          </ul>
          <div className="col-span-2">{children}</div>
        </div>
      </Layout>
    </>
  );
};

export default Seed;
