import Layout from "../components/Layout";
import Header from "../components/Header";
import { useState } from "react";
import Learning from "../components/seeds/Learning";
import Default from "../components/seeds/Default";
import Writing from "../components/seeds/Writing";
import FriendsNPeople from "../components/seeds/FriendsNPeople";
import Thinking from "../components/seeds/Thinking";
import PyschNPerform from "../components/seeds/PyschNPerform";
import Philosophy from "../components/seeds/Philosophy";
import Career from "../components/seeds/Career";
import Technology from "../components/seeds/Technology";
import RabbitHoles from "../components/seeds/RabbitHoles";

export default function Seeds() {
  const main_color = "text-violet";
  const subjects = [
    "Rabbit Holes",
    "Learning to Learn",
    "Writing",
    "Thinking",
    "Friends & People",
    "Psych & Performance",
    "Philosophy",
    "Career",
    "Technology",
  ];
  const [clicked, setClicked] = useState();
  const handleClick = (subject) => {
    setClicked(subject);
  };

  const renderContent = () => {
    switch (clicked) {
      case "Rabbit Holes":
        return <RabbitHoles />;
      case "Learning to Learn":
        return <Learning />;
      case "Writing":
        return <Writing />;
      case "Thinking":
        return <Thinking />;
      case "Friends & People":
        return <FriendsNPeople />;
      case "Psych & Performance":
        return <PyschNPerform />;
      case "Philosophy":
        return <Philosophy />;
      case "Career":
        return <Career />;
      case "Technology":
        return <Technology />;
      default:
        return <Default main_color={main_color} />;
    }
  };

  return (
    <>
      <Header page="seeds" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>
          <a href="/seeds">seeds!</a>
        </h1>
        <br />
        <div className="grid grid-cols-3 gap-4">
          <div className="text-xl">
            <ul>
              {subjects.map((subject) => (
                <li
                  key={subject}
                  className={`hover:text-black hover:font-bold hover:cursor-pointer ${
                    subject === clicked ? "text-black font-bold" : ""
                  }`}
                  onClick={() => handleClick(subject)}
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <div className="text-xl">{renderContent()}</div>
          </div>
        </div>
      </Layout>
    </>
  );
}
