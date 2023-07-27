import Navbar from "./Navbar";
import Activities from "./Activities";
import Socials from "./Socials";
import Title from "./Title";
import Menu from "./Menu";

interface Props {
  color?: string;
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, color, home, sidebar }: Props) {
  return (
    <>
      <div>
        <main>
          {/* Whole screen */}
          <div className="flex flex-col h-screen justify-between">
            {/* Top bar */}
            <div className="sticky flex justify-between">
              <Title color={color} />
              {/* Navbar is hidden on small screens and visible on medium screens and larger */}
              <div className="hidden md:flex">
                <Navbar color={color} />
              </div>
              {/* Menu is visible on small screens and hidden on medium screens and larger */}
              <div className="md:hidden">
                <Menu />
              </div>
            </div>
            {/* Bottom half */}
            <div className="flex overflow-hidden">
              {/* Side panel */}
              <div className="hidden md:block sticky m-8">
                <Activities />
              </div>
              <div className="flex flex-col">
                <div
                  className="m-8 overflow-y-auto"
                  style={{ maxHeight: "100%" }}
                >
                  {children}
                </div>
              </div>
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
