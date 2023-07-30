import Link from "next/link";

interface Props {
  home: boolean;
}

const Title = ({ home }: Props) => {
  const primary_class = `text-primary m-8 text-5xl font-extrabold flex-none hover:text-neon-green`;
  const secondary_class = `text-gray m-8 text-5xl font-extrabold flex-none hover:text-primary`;
  console.log(home);
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
      <Link href="/" className={`hidden sm:block ${secondary_class}`}>
        grant hale
      </Link>
      <Link href="/" className={`block sm:hidden ${secondary_class}`}>
        gha
      </Link>
    </>
  );
};

export default Title;
