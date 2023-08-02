import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Influences() {
  const sidebar = (
    <div className="text-waving-brown font-bold text-3xl">Influences</div>
  );

  const people = [
    {
      name: "Frank Oppenheimer",
      link: "https://en.wikipedia.org/wiki/Frank_Oppenheimer",
    },
    {
      name: "Patrick Collison",
      link: "https://patrickcollison.com/",
    },
    {
      name: "Frances Perkins",
      link: "https://en.wikipedia.org/wiki/Frances_Perkins",
    },
    {
      name: "Paul Graham",
      link: "http://paulgraham.com/",
    },
    {
      name: "Dorothy Day",
      link: "https://en.wikipedia.org/wiki/Dorothy_Day",
    },
    {
      name: "Naval Ravikant",
      link: "https://nav.al/",
    },
    {
      name: "Andrew Huberman",
      link: "https://hubermanlab.com/",
    },
    {
      name: "Derek Sivers",
      link: "https://sive.rs/",
    },
    {
      name: "Richard Feynman",
      link: "https://en.wikipedia.org/wiki/Richard_Feynman",
    },
    {
      name: "Tim Urban",
      link: "https://waitbutwhy.com/",
    },
    {
      name: "Charlie Munger",
      link: "https://en.wikipedia.org/wiki/Charlie_Munger",
    },
    {
      name: "Nassim Taleb",
      link: "https://www.fooledbyrandomness.com/",
    },
    {
      name: "J.C.R. Licklider",
      link: "https://www.amazon.com/Dream-Machine-M-Mitchell-Waldrop/dp/1732265119",
    },
    {
      name: "Douglas Hofstadter",
      link: "https://en.wikipedia.org/wiki/Douglas_Hofstadter",
    },
  ];

  const books = [
    {
      name: "Algorithms",
      author: "Jeff Erickson",
      link: "https://jeffe.cs.illinois.edu/teaching/algorithms/",
    },
    {
      name: "Catch-22",
      author: "Joseph Heller",
      link: "https://www.amazon.com/Catch-22-50th-Anniversary-Joseph-Heller/dp/1451626657",
    },
    {
      name: "Black Boy",
      author: "Richard Wright",
      link: "https://www.amazon.com/Black-Boy-Richard-Wright/dp/0061443085",
    },
    {
      name: "Invisible Man",
      author: "Ralph Ellsion",
      link: "https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764",
    },
    {
      name: "The Dream Machine",
      author: "M. Mitchell Waldrop",
      link: "https://www.amazon.com/Dream-Machine-M-Mitchell-Waldrop/dp/1732265119/ref=sr_1_1?crid=1DCWPQ0M4DO0T&keywords=the+dream+machine&qid=1683673665&s=books&sprefix=the+dream+machine%2Cstripbooks%2C92&sr=1-1",
    },
    {
      name: "The Chip",
      author: "T.R. Reid",
      link: "https://www.amazon.com/Chip-Americans-Invented-Microchip-Revolution/dp/0375758283",
    },
    {
      name: "Stuff Matters",
      author: "Mark Miodownik",
      link: "https://www.amazon.com/Stuff-Matters-Exploring-Marvelous-Materials/dp/0544236041",
    },
    {
      name: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      link: "https://www.navalmanack.com/",
    },
    {
      name: "Hard Landing",
      author: "Thomas Petzinger Jr.",
      link: "https://www.amazon.com/Hard-Landing-Contest-Profits-Airlines/dp/0812928350",
    },
    {
      name: "Whole Earth Discipline",
      author: "Stewart Brand",
      link: "https://www.amazon.com/Whole-Earth-Discipline-Transgenic-Geoengineering/dp/0143118285",
    },
    {
      name: "Something Incredibly Wonderful Happens",
      author: "K.C. Cole",
      link: "https://www.betterworldbooks.com/product/detail/something-incredibly-wonderful-happens-frank-oppenheimer-and-the-world-he-made-up-9780151008223",
    },
    {
      name: "How To Live: 27 Conflicting Answers and One Weird Question",
      author: "Derek Sivers",
      link: "https://sive.rs/h",
    },
    {
      name: "Skin in the Game",
      author: "Nassim Taleb",
      link: "https://www.amazon.com/Skin-Game-Hidden-Asymmetries-Daily/dp/042528462X",
    },
    {
      name: "Surely You're Joking, Mr. Feynman!",
      author: "Richard Feynman",
      link: "https://www.amazon.com/Surely-Feynman-Adventures-Curious-Character/dp/0393316041",
    },
    {
      name: "Deep Work",
      author: "Cal Newport",
      link: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
    },
    {
      name: "Poor Charlie's Almanack",
      author: "Charlie Munger",
      link: "https://www.amazon.com/Poor-Charlies-Almanack-Essential-Charles/dp/1953953239/ref=sr_1_1?crid=3SR5XEKQJNH0L&keywords=poor+charlie%27s+almanack&qid=1683681145&sprefix=poor%2520charlies%2520almanack%2Caps%2C88&sr=8-1",
    },
    {
      name: "The Innovator's Dilemma",
      author: "Clayton Christensen",
      link: "https://www.amazon.com/Innovators-Dilemma-Technologies-Management-Innovation/dp/1633691780/ref=sr_1_1?keywords=innovators+dilemma&qid=1683681292&s=books&sprefix=the+innovators+di%2Cstripbooks%2C88&sr=1-1",
    },
    {
      name: "I Know Why the Caged Bird Sings",
      author: "Maya Angelou",
      link: "https://www.amazon.com/Know-Why-Caged-Bird-Sings/dp/0345514408",
    },
    {
      name: "Good Calories, Bad Calories",
      author: "Gary Taubes",
      link: "https://www.amazon.com/Good-Calories-Bad-Controversial-Science/dp/1400033462/ref=asc_df_1400033462/?tag=hyprod-20&linkCode=df0&hvadid=312134205520&hvpos=&hvnetw=g&hvrand=830581454970089288&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9022185&hvtargid=pla-330756790220&psc=1",
    },
    {
      name: "The Grapes of Wrath",
      author: "John Steinbeck",
      link: "https://www.amazon.com/Grapes-Wrath-John-Steinbeck/dp/0143039431",
    },
    {
      name: "The Misbehavior of Markets",
      author: "Benoit Mandelbrot",
      link: "https://www.amazon.com/Misbehavior-Markets-Fractal-Financial-Turbulence/dp/0465043577",
    },
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      link: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
    },
    {
      name: "Godel, Escher, Bach",
      author: "Douglas Hofstadter",
      link: "https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach",
    },
    {
      name: "Hooked",
      author: "Nir Eyal",
      link: "https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788",
    },
    {
      name: "The Road to Character",
      author: "David Brooks",
      link: "https://www.amazon.com/Character-Thorndike-Press-Large-Print/dp/1594139377",
    },
  ];
  return (
    <>
      <Header page="influences" />
      <Layout>
        <h1 className="font-extrabold text-waving-brown text-4xl">influences!</h1>
        <br />
        <p className="text-gray text-xl">
          I like to think of <span className="font-bold">ideas as seeds</span>{" "}
          planted by our influences and nourished by curiosity, contemplation,
          and exploration.
        </p>
        <br />
        <p className="text-gray text-xl">
          These seeds, when shared with others through discussion and creation,
          have the power to take root and become a{" "}
          <span className="font-bold">collective intellectual forest.</span>
        </p>
        <br />
        <p className="text-gray text-xl">
          Here are some of the{" "}
          <span className="font-bold">books and people</span> that have provided
          me with seeds as a person and thinker:
        </p>
        <br />
        <h1 className="text-2xl text-gray font-bold">people</h1>
        <ul className="list-disc pl-5 text-waving-brown font-bold text-xl">
          {people.map((person) => (
            <li className="underline hover:text-primary" key={person.name}>
              <Link href={person.link} target="_blank">
                {person.name}
              </Link>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <h1 className="text-2xl text-gray font-bold">books</h1>
        <ul className="list-disc pl-5 text-waving-brown font-bold text-xl">
          {books.map((book) => (
            <li className="underline hover:text-primary" key={book.name}>
              <Link href={book.link} target="_blank">
                {book.name}
              </Link>{" "}
              by {book.author}
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
