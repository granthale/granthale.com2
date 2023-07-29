import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import MainContent from "./MainContent";
import { useState } from "react";
import styles from "../styles/Layout.module.css";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: Props) {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <main>
      <div className={`flex flex-col ${styles.container}`}>
        <TopBar
          home={home}
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
        ></TopBar>
        <MainContent home={home} children={children} />
        <BottomBar />
      </div>
    </main>
  );
}
