import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import MainContent from "./MainContent";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: Props) {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <main>
        {/* Whole screen */}
        <div className="flex flex-col">
          <TopBar
            home={home}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
          ></TopBar>
          {/* Main content */}
          <MainContent home={home} children={children} />
          {/* Bottom bar */}
          <BottomBar />
        </div>
      </main>
    </>
  );
}
