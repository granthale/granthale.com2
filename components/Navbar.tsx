
interface Props {
  color: string;
}

const Navbar = ({color}:Props) => {
  const box = `box-border h-12 w-64 mt-8 p-4 bg-${color} rounded-3xl flex items-center justify-between`;
  return (
    <div className={box}>
      <a href="/about" className="text-white font-bold">
        about
      </a>
      <a href="/writing" className="text-white font-bold">
        writing
      </a>
      <a href="/influences" className="text-white font-bold">
        influences
      </a>
    </div>
  );
};

export default Navbar;
