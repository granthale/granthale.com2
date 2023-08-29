import Image from "next/image";
import { Podcast } from "../Pods";

interface Props {
  podcast: Podcast;
}

const PodImage = ({ podcast }: Props) => {
  return (
    <div className="flex flex-none">
      <a
        href={podcast.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="rounded"
          width={100}
          height={100}
          src="/images/surface-tension.png"
          alt="surface tension logo"
        />
      </a>
    </div>
  );
};

export default PodImage;
