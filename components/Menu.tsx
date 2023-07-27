import Link from "next/link"

interface Props {
  menuStatus: boolean;
}

// if menuStatus is true, then the menu should slide in from top-23
const Menu = ({menuStatus} : Props) => {
  return (
    <>
      <div className="fixed top-23 left-0 w-full h-full bg-primary bg-opacity-90 z-50">
        <div className="flex flex-col m-8 justify-top items-left h-full">
          <div className="flex flex-col justify-center">
            <Link href="/about" className="text-4xl text-white font-bold hover:text-neon-green">
              about
            </Link>
            <Link href="/writing" className="text-4xl text-white font-bold hover:text-neon-green">
              writing
            </Link>
            <Link href="/influences" className="text-4xl text-white font-bold hover:text-neon-green">
              influences
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
