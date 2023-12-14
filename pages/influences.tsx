import Layout from "../components/Layout";
import Header from "../components/Header";
import { useState } from "react";
import Curiosities from "../components/influences/Curiosities";
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

export default function Influences() {
  const main_color = "text-violet";
  const subjects = [
    "Curiosities",
    "Learning",
    "Writing",
    "Thinking",
    "Friends & People",
    "Psych & Performance",
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
      case "Curiosities":
        return <Curiosities />;
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
      case "Philosophy":
        return <Philosophy />;
      case "Career":
        return <Career />;
      case "Technology":
        return <Technology />;
      case "Other":
        return <Other />
      default:
        return <Default main_color={main_color} />;
    }
  };

  return (
    <>
      <Header page="influences" />
      <Layout>
        <h1 className={`font-extrabold ${main_color} text-4xl`}>influences!</h1>
        <br />
        <div className="grid grid-cols-3 gap-4">
          <div className="text-xl">
            <ul>
              {subjects.map((subject) => (
                <li
                  key={subject}
                  className={`hover:text-black hover:font-bold ${
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
