import Link from "next/link";

interface Props {
  title: string;
  author: string;
  dateFinished: string;
  summary: string;
  id: string;
  rating: number;
}

const BookCard = ({
  title,
  author,
  dateFinished,
  summary,
  id,
  rating,
}: Props) => {
  return (
    <>
      <Link href={`/books/${id}`}>
        <div className="flex p-4 rounded-b border lg:rounded-b-none lg:rounded-r hover:text-neon-green">
          <div className="flex flex-col flex-grow justify-between">
            <div className="mr-2">
              <p className="text-2xl font-bold mb-1 hidden md:block left-0">
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
            <div className="flex flex-col md:flex-row md:justify-between mr-2">
              <p>
                <p className="mt-4 md:mt-0 font-bold">{dateFinished}</p>
              </p>
              <p>
                <span className="font-bold">Rating:</span> {rating}/10
              </p>
            </div>
          </div>
          <img
            className="mx-1 flex-none"
            width={125}
            src={`/books/${id}.jpeg`}
            alt={`Cover of ${title}`}
          />
        </div>
        <br />
      </Link>
    </>
  );
};

export default BookCard;