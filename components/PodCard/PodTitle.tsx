import { Podcast } from "../Pods";

interface Props {
    podcast: Podcast;
}

const PodTitle = ({podcast} : Props) => {
  return (
    <a
      href={podcast.external_urls.spotify}
      className="text-neon-green font-bold text-xl mb-2"
      target="_blank"
    >
      {podcast.name}
    </a>
  );
};

export default PodTitle;
