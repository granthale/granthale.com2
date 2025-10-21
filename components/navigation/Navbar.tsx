import Link from "next/link";

interface Props {
  home: boolean;
}

const Navbar = ({ home }: Props) => {
  const box = `text-xl h-12 w-74 m-8 p-4 flex items-center`;
  const hover = `font-bold no-underline border-b-0`;
  return (
    <div className={box}>
      <Link href="/seeds" className={hover}>
        seeds
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      <Link href="/writing" className={hover}>
        writing
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      {/* <div className="border-r bg-black h-full mx-2"></div> */}
      <Link href="/library" className={hover}>
        library
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      <Link href="/about" className={hover}>
        about
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      <Link href="https://www.verdant.ink" className={hover}>
        garden
      </Link>
    </div>
  );
};

export default Navbar;
