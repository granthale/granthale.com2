import Link from "next/link";
import Socials from "./Socials";

const Menu = () => {
  return (
    <>
      <div className="fixed top-23 left-0 w-full h-full bg-primary bg-opacity-100 z-50">
        <div className="flex flex-col flex-1 m-8 justify-between items-left min-h-full">
          <div className="flex flex-col justify-center">
            <Link
              href="/about"
              className="text-4xl text-white font-bold hover:text-neon-green"
            >
              about
            </Link>
            <Link
              href="/influences"
              className="text-4xl text-white font-bold hover:text-neon-green mt-3"
            >
              influences
            </Link>
            <Link
              href="/writing"
              className="text-4xl text-white font-bold hover:text-neon-green mt-3"
            >
              writing
            </Link>
            <Link
              href="/podcast"
              className="text-4xl text-white font-bold hover:text-neon-green mt-3"
            >
              podcast
            </Link>
          </div>
        </div>
        <div className="p-4">
          <Socials menu />
        </div>
      </div>
    </>
  );
};

export default Menu;
