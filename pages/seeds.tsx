import Layout from "../components/Layout";
import Header from "../components/Header";
import { useState } from "react";
import Learning from "../components/influences/Learning";
import Default from "../components/influences/Default";
import Writing from "../components/influences/Writing";
import FriendsNPeople from "../components/influences/FriendsNPeople";
import Thinking from "../components/influences/Thinking";
import PyschNPerform from "../components/influences/PyschNPerform";
import Philosophy from "../components/influences/Philosophy";
import Career from "../components/influences/Career";
import Technology from "../components/influences/Technology";
import Other from "../components/influences/Other";
import Productivity from "../components/influences/Productivity";
import EntryPoints from "../components/influences/EntryPoints";

export default function Seeds() {
  const main_color = "text-violet";
  const subjects = [
    "Entry Points",
    "Learning",
    "Writing",
    "Thinking",
    "Friends & People",
    "Psych & Performance",
    "Productivity",
    "Philosophy",
    "Career",
    "Technology",
    "Other",
  ];
  const [clicked, setClicked] = useState();
  const handleClick = (subject) => {
    setClicked(subject);
  };

  const renderContent = () => {
    switch (clicked) {
      case "Entry Points":
        return <EntryPoints />;
      case "Learning":
        return <Learning />;
      case "Writing":
        return <Writing />;
      case "Thinking":
        return <Thinking />;
      case "Friends & People":
        return <FriendsNPeople />;
      case "Psych & Performance":
        return <PyschNPerform />;
      case "Productivity":
        return <Productivity />;
      case "Philosophy":
        return <Philosophy />;
      case "Career":
        return <Career />;
      case "Technology":
        return <Technology />;
      case "Other":
        return <Other />;
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
