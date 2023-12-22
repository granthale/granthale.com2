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
          width={250}
          height={100}
          src={`/library/${id}.jpeg`}
          alt={`Cover of ${title}`}
        />
      </Link>
    </>
  );
};

export default BookCard;
