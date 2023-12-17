import Link from "next/link";

const Pages = () => {
  return (
    <div className="flex flex-col justify-center m-12 text-4xl text-white">
      <Link href="/podcast">podcast</Link>
      <Link href="/writing" className="mt-3">
        writing
      </Link>
      <Link href="/seeds" className="mt-3">
        seeds
      </Link>
      <Link href="/library" className="mt-3">
        library
      </Link>
      <Link href="/about" className="mt-3">
        about
      </Link>
    </div>
  );
};

export default Pages;
