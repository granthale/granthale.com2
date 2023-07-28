import Navbar from "./Navbar";
import Activities from "./Activities";
import Socials from "./Socials";
import Title from "./Title";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home, sidebar }: Props) {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <div>
        <main>
          {/* Whole screen */}
          <div className="flex flex-col h-screen justify-between">
            {/* Top bar */}
            <section className="sticky flex flex-initial border-b-2 border-background-primary justify-between">
              <Title home={home} />
              <div className="hidden md:flex">
                <Navbar home={home} />
              </div>
              <div className="md:hidden">
                <MenuButton
                  menuStatus={menuStatus}
                  setMenuStatus={setMenuStatus}
                />
                {menuStatus && <Menu />}
              </div>
            </section>
            {/* Bottom half */}
            <div className="flex flex-grow overflow-hidden">
              {/* Side panel */}
              <section className="hidden md:block sticky m-8 overflow-y">
                <Activities home={home} />
              </section>
              <section className="flex flex-col">
                <div
                  className="m-8 overflow-y-auto"
                  style={{ maxHeight: "100%" }}
                >
                  {children}
                </div>
              </section>
            </div>
            {/* Bottom bar */}
            <div className="flex justify-end mr-2">
              <Socials />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
