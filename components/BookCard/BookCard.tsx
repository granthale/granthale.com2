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
        <div className="rounded-b border lg:rounded-b-none lg:rounded-r flex justify-between p-4">
          <div className="flex-col">
            <p className="text-2xl font-bold">{title}</p>
            <p>This book was pretty good</p>
          </div>
          <Image
            className=""
            width={120}
            height={120}
            src="/images/surface-tension.png"
            alt="surface tension logo"
          />
        </div>
        <br />
      </Link>
    </>
  );
};

export default BookCard;
