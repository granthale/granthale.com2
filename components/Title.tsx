import Link from "next/link";

interface Props {
  color: string;
}

const Title = ({ color }: Props) => {
  const primary_class = `text-primary m-8 text-5xl font-extrabold flex-none hover:text-neon-green`;
  const secondary_class = `text-gray m-8 text-5xl font-bold flex-none hover:text-${color}`;
  const bool = color === "primary";
  return bool ? (
    <Link href="/" className={primary_class}>
      grant hale
    </Link>
  ) : (
    <Link href="/" className={secondary_class}>
      grant hale
    </Link>
  );
};

export default Title;
