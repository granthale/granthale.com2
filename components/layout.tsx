import Head from "next/head";
import Navbar from "./Navbar";
import Activities from "./Activities";
import Socials from "./Socials";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:title" content="grant hale" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>
          {/* Whole screen */}
          <div className="flex flex-col h-screen">
            {/* Top bar */}
            <div className="sticky">
              <div className="flex justify-between">
                <h1 className="text-primary m-8 text-5xl font-bold flex-none">
                  grant hale
                </h1>
                <Navbar color="primary" />
              </div>
            </div>
            {/* Bottom half */}
            <div className="flex flex-1 overflow-hidden">
              {/* Side panel */}
              <div className="sticky">
                <Activities />
              </div>
              <div className="flex flex-col">
                <div
                  className="text-primary m-8 text-3xl overflow-y-auto"
                  style={{ maxHeight: "100%" }}
                >
                  👋 Welcome! I believe that everyone has room for more
                  curiosity, more wonder, and more creativity. I’m on a mission
                  to hone those qualities in myself and help others do the same.
                  Recently graduated the University of Illinois with a degree in
                  finance and a passion for computer science. Currently co-host
                  a podcast called Surface Tension that aims to expose cool
                  perspectives on the world around us. Don’t love the word “i”,
                  looking for my post-i calling. Working on creating things,
                  meeting smart, ambitious, kind people, and building a better
                  character.
                </div>
                <Socials />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
