import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  author: string;
  summary: string;
  id: string;
  rating: string;
  href: string;
}

const BookCard = ({ title, author, summary, id, rating, href }: Props) => {
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
          <Image className="" width={120} height={120} src={href} alt={id} />
        </div>
        <br />
      </Link>
    </>
  );
};

export default BookCard;
