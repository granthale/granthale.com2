import Link from "next/link";

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
      <Link href={`/books/${id}`}>
        <div className="rounded-b border lg:rounded-b-none lg:rounded-r flex justify-between p-4">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-2xl font-bold mb-1 hidden md:block">
                {title} by {author}
              </p>
              <p className="hidden md:block">
                {summary
                  ? summary.length > 250
                    ? `${summary.substring(0, 250)}...`
                    : summary
                  : ""}
              </p>
            </div>
            <p className="mt-4">
              <span className="font-bold">Score:</span> {rating}/10
            </p>
          </div>
          <div className="flex-none ml-4">
            <img
              width={125}
              src={`/books/${id}.jpeg`}
              alt={`Cover of ${title}`}
            />
          </div>
        </div>
        <br />
      </Link>
    </>
  );
};

export default BookCard;
