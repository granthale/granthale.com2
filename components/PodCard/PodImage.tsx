import Image from "next/image";
import { Podcast } from "../Pods";

interface Props {
  podcast: Podcast;
}

const PodImage = ({ podcast }: Props) => {
  return (
    <div className="flex flex-none">
      <a
        className="border-b-0"
        href={podcast.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="rounded"
          width={100}
          height={100}
          // if the title starts with Stay Curious, use the logo with the text
          // otherwise, use the logo without the text
          src={`/images/${podcast.name.startsWith("Stay Curious") ? "stay-curious" : "surface-tension"}.jpeg`}
          alt="surface tension logo"
        />
      </a>
    </div>
  );
};

export default PodImage;
