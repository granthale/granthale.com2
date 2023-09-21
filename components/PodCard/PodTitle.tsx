import { Podcast } from "../Pods";

interface Props {
    podcast: Podcast;
}

const PodTitle = ({podcast} : Props) => {
  return (
    <a
      href={podcast.external_urls.spotify}
      className="text-neon-green font-bold text-xl mb-2 border-b-0"
      target="_blank"
      rel="noopener noreferrer"
    >
      {podcast.name}
    </a>
  );
};

export default PodTitle;
