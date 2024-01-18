import Link from "next/link";
import Layout from "./Layout";

// Put main color back in original file

interface Props {
  children: React.ReactNode;
  selected: string;
}

const Seed = ({ children, selected }: Props) => {
  const main_color = "text-blue";

  const subjects = [
    { title: "Rabbit Holes", link: "rabbit-holes" },
    { title: "Learning to Learn", link: "learning" },
    { title: "Writing", link: "writing" },
    { title: "Thinking", link: "thinking" },
    { title: "Friends & People", link: "friends-n-people" },
    { title: "Psych & Performance", link: "psych-n-perform" },
    { title: "Philosophy", link: "philosophy" },
    { title: "Career", link: "career" },
    { title: "Entrepreneurship", link: "entrepreneurship" },
    { title: "Technology", link: "tech" },
  ];

  return (
    <>
      <Layout>
        <h1>
          <Link
            href="/seeds"
            className={`font-extrabold ${main_color} text-4xl`}
          >
            seeds!
          </Link>
        </h1>
        <br />
        {/* WIP */}
        <aside className="hidden md:block">
          <div className="grid grid-cols-3 gap-4 text-xl">
            <ul>
              {subjects.map((subject) => (
                <li key={subject.title}>
                  <Link
                    href={`/seeds/${subject.link}`}
                    className={`${
                      subject.title === selected
                        ? "font-bold"
                        : ""
                    }`}
                  >
                    {subject.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="col-span-2">{children}</div>
          </div>
        </aside>

        {/* WIP */}
        <div className="block md:hidden text-xl font-bold">
          Not currently available for mobile. Check back soon!
        </div>
      </Layout>
    </>
  );
};

export default Seed;
