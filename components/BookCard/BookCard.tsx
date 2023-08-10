import Image from "next/image";
import Link from "next/link";

interface Book {
  img: string;
  title: string;
  author: string;
  summary: string;
}

interface Props {
  id: string;
  title: string;
}

const BookCard = ({ id, title }: Props) => {
  return (
    <>
      <Link href={`/posts/${id}`}>
        <div className="rounded-b border lg:rounded-b-none lg:rounded-r p-4 flex">
          <Image
            className=""
            width={100}
            height={100}
            src="/images/surface-tension.png"
            alt="surface tension logo"
          />
          <div className="flex-col ml-4">
            <p className="text-2xl font-bold">{title}</p>
            <p>This book was pretty good</p>
          </div>
          <br />
        </div>
        <br />
      </Link>
    </>
  );
};

export default BookCard;
