import Link from "next/link";

interface Props {
  home: boolean;
}

const Navbar = ({ home }: Props) => {
  const box = home
    ? `box-border h-12 w-64 xl m-8 p-4 bg-primary rounded-xl flex items-center justify-between`
    : `box-border h-12 w-64 xl m-8 p-4 bg-gray rounded-xl flex items-center justify-between`;
  const hover = home
    ? `text-white hover:text-neon-green font-bold`
    : `text-white hover:text-primary font-bold`;
  return (
    <div className={box}>
      <Link href="/about" className={hover}>
        about
      </Link>
      <div className="border-r border-white h-full mx-2"></div>
      <Link href="/writing" className={hover}>
        writing
      </Link>
      <div className="border-r border-white h-full mx-2"></div>
      <Link href="/influences" className={hover}>
        influences
      </Link>
    </div>
  );
};

export default Navbar;
