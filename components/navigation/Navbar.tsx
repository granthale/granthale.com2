import Link from "next/link";

interface Props {
  home: boolean;
}

const Navbar = ({ home }: Props) => {
  const box = `text-xl h-12 w-74 m-8 p-4 flex items-center`;
  const hover = `font-bold no-underline border-b-0`;
  return (
    <div className={box}>
      <Link href="/podcast" className={hover}>
        podcast
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      <Link href="/writing" className={hover}>
        writing
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      {/* <Link href="/seeds" className={hover}>
        seeds
      </Link> */}
      {/* <div className="border-r bg-black h-full mx-2"></div> */}
      <Link href="/library" className={hover}>
        library
      </Link>
      {/* <div className="border-r bg-black h-full mx-2"></div>
      <Link href="/travel" className={hover}>
        travel
      </Link> */}
      <div className="border-r bg-black h-full mx-2"></div>
      <Link href="/about" className={hover}>
        about
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      <a
        href="https://www.verdant.ink"
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/tree-arch.png" width={30} alt="verdant"></img>
      </a>
    </div>
  );
};

export default Navbar;
