import Link from "next/link";

const Pages = () => {
  return (
    <div className="flex flex-col justify-center m-12">
      <Link
        href="/podcast"
        className="text-4xl text-white font-bold hover:text-neon-green"
      >
        podcast
      </Link>
      <Link
        href="/writing"
        className="text-4xl text-white font-bold hover:text-neon-green mt-3"
      >
        writing
      </Link>
      <Link
        href="/influences"
        className="text-4xl text-white font-bold hover:text-neon-green mt-3"
      >
        influences
      </Link>
      <Link
        href="/books"
        className="text-4xl text-white font-bold hover:text-neon-green mt-3"
      >
        books
      </Link>
      <Link
        href="/about"
        className="text-4xl text-white font-bold hover:text-neon-green mt-3"
      >
        about
      </Link>
    </div>
  );
};

export default Pages;
