import Link from "next/link";

const Pages = () => {
  return (
    <div className="flex flex-col justify-center m-12 text-4xl text-white">
      <Link href="/seeds" className="mt-3">
        seeds
      </Link>
      <Link href="/writing" className="mt-3">
        writing
      </Link>
      <Link href="/library" className="mt-3">
        library
      </Link>
      <Link href="/about" className="mt-3">
        about
      </Link>
      <Link href="https://www.verdant.ink" className="mt-3">
        garden
      </Link>
    </div>
  );
};

export default Pages;
