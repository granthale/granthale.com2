import Link from "next/link";

const Pages = () => {
  return (
    <div className="flex flex-col justify-center m-12 text-4xl text-white font-bold">
      <Link href="/podcast" className="font-bold">
        podcast
      </Link>
      <Link href="/writing" className="font-bold mt-3">
        writing
      </Link>
      <Link href="/influences" className="font-bold mt-3">
        influences
      </Link>
      <Link href="/books" className="font-bold mt-3">
        books
      </Link>
      <Link href="/about" className="font-bold mt-3">
        about
      </Link>
    </div>
  );
};

export default Pages;
