import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  id: string;
}

const BookCard = ({ title, id }: Props) => {
  return (
    <>
      <Link href={`/library/${id}`} style={{ borderBottom: "none" }}>
        <Image
          className="hover:animate-pulse"
          src={`/library/${id}.jpeg`}
          width={250}
          height={100}
          alt={`Cover of ${title}`}
        />
      </Link>
    </>
  );
};

export default BookCard;
