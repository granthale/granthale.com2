import Link from "next/link";

interface Props {
  home: boolean;
}

const Navbar = ({ home }: Props) => {
  const box = `box-border h-12 w-74 xl m-8 p-4 bg-${
    home ? "primary" : "gray"
  } rounded-xl flex items-center justify-between`;
  const hover = `text-white hover:text-${
    home ? "neon-green" : "primary"
  } font-bold`;
  return (
    <div className={box}>
      <Link href="/about" className={hover}>
        about
      </Link>
      <div className="border-r border-white h-full mx-2"></div>
      <Link href="/influences" className={hover}>
        influences
      </Link>
      <div className="border-r border-white h-full mx-2"></div>
      <Link href="/writing" className={hover}>
        writing
      </Link>
      <div className="border-r border-white h-full mx-2"></div>
      <Link href="/podcast" className={hover}>
        podcast
      </Link>
    </div>
  );
};

export default Navbar;
