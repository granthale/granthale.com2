import Link from "next/link";

interface Props {
  home: boolean;
}

const Title = ({ home }: Props) => {
  const primary_class = `text-neon-green m-8 text-5xl font-extrabold flex-none`;
  const secondary_class = `m-8 text-5xl font-extrabold flex-none hover:text-neon-green`;
  return home ? (
    <>
      <Link href="/" className={`hidden md:block ${primary_class}`}>
        grant hale
      </Link>
      <Link href="/" className={`block md:hidden ${primary_class}`}>
        gha
      </Link>
    </>
  ) : (
    <>
      <Link href="/" className={`hidden md:block ${secondary_class}`}>
        grant hale
      </Link>
      <Link href="/" className={`block md:hidden ${secondary_class}`}>
        gha
      </Link>
    </>
  );
};

export default Title;
