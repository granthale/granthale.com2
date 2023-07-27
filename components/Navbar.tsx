import Link from "next/link";

interface Props {
  color: string;
}

const Navbar = ({ color }: Props) => {

  const box = `box-border h-12 w-64 xl m-8 p-4 bg-${color} rounded-xl flex items-center justify-between`;
  return (
    <div className={box}>
      <Link href="/about" className="text-white hover:text-neon-green font-bold">
        about
      </Link>
      <div className="border-r border-white h-full mx-2"></div>
      <Link href="/writing" className="text-white hover:text-neon-green font-bold">
        writing
      </Link>
      <div className="border-r border-white h-full mx-2"></div>
      <Link
        href="/influences"
        className="text-white hover:text-neon-green font-bold"
      >
        influences
      </Link>
    </div>
  );
};

export default Navbar;
