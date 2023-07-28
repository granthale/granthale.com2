import Link from "next/link";

interface Props {
  home: boolean;
}

const Title = ({ home }: Props) => {
  const primary_class = `text-primary m-8 text-5xl font-extrabold flex-none hover:text-neon-green`;
  const secondary_class = `text-gray m-8 text-5xl font-bold flex-none hover:text-primary`;
  return home ? (
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
