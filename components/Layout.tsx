import TopBar from "./TopBar";
import MainContent from "./MainContent";
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import Socials from "./Socials";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

function Layout({ children, home }: Props) {
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
        <br />
        {!home && <Socials />}
      </div>
    </main>
  );
}

export default Layout;
