import Image from "next/image";
import Link from "next/link";

interface Book {
  img: string;
  title: string;
  author: string;
  summary: string;
}

interface Props {
  title: string;
  author: string;
  summary: string;
  id: string;
  rating: string;
}

const BookCard = ({ title, author, summary, id, rating }: Props) => {
  return (
    <>
      <Link href={`/posts/${id}`}>
        <div className="rounded-b border lg:rounded-b-none lg:rounded-r flex justify-between p-4">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-2xl font-bold">
                {title} by {author}
              </p>
              <p>{summary}</p>
            </div>
            <p>Score: {rating}/10</p>
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
