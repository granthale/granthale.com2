import Link from "next/link";

interface Props {
  home: boolean;
}

const Navbar = ({ home }: Props) => {
  const box = `text-xl h-12 w-74 m-8 p-4 flex items-center`;
  const hover = `hover:text-neon-green
   font-bold `;
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
      <Link href="/influences" className={hover}>
        influences
      </Link>
      <div className="border-r bg-black h-full mx-2"></div>
      <Link href="/about" className={hover}>
        about
      </Link>
    </div>
  );
};

export default Navbar;
