import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  id: string;
  dateFinished: string;
}

const BookCard = ({ title, id, dateFinished }: Props) => {
  return (
    <>
      <p className="italic">{dateFinished}</p>
      <Link href={`/library/${id}`} style={{ borderBottom: "none" }}>
        <Image
          className="hover:animate-pulse"
          src={`/library/${id}.jpeg`}
          placeholder="empty"
          width={250}
          height={100}
          alt={`${title}`}
        />
      </Link>
    </>
  );
};

export default BookCard;
