import Link from "next/link";

interface Props {
  home: boolean;
}

const Title = ({ home }: Props) => {
  const primary_class = `mt-8 mx-2 text-5xl text-neon-green font-extrabold flex-none border-b-0`;
  const secondary_class = `mt-8 mx-2 text-5xl font-extrabold flex-none border-b-0`;
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
