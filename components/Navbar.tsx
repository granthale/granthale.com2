import Link from "next/link";

interface Props {
  home: boolean;
}

const Navbar = ({ home }: Props) => {
  const box = `box-border text-xl h-12 w-74 xl m-8 p-4 bg-${
    home ? "neon-green" : "black"
  } rounded-xl flex items-center justify-between`;
  const hover = `text-black hover:text-neon-green
   font-bold`;
  return (
    <div className={box}>
      <Link href="/about" className={hover}>
        about
      </Link>
      <div className="border-r border-black h-full mx-2"></div>
      <Link href="/influences" className={hover}>
        influences
      </Link>
      <div className="border-r border-black h-full mx-2"></div>
      <Link href="/writing" className={hover}>
        writing
      </Link>
      <div className="border-r border-black h-full mx-2"></div>
      <Link href="/podcast" className={hover}>
        podcast
      </Link>
    </div>
  );
};

export default Navbar;
