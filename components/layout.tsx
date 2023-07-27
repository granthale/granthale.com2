import Navbar from "./Navbar";
import Activities from "./Activities";
import Socials from "./Socials";
import Title from "./Title";

interface Props {
  color: string;
  children: React.ReactNode;
}

export default function Layout({ children, color }: Props) {
  return (
    <>
      <div>
        <main>
          {/* Whole screen */}
          <div className="flex flex-col h-screen justify-between">
            {/* Top bar */}
            <div className="sticky flex justify-between">
              <Title color={color} />
              <Navbar color="primary" />
            </div>
            {/* Bottom half */}
            <div className="flex flex-1 overflow-hidden">
              {/* Side panel */}
              <div className="sticky">
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
