import { Podcast } from "../Pods";

interface Props {
  podcast: Podcast;
}

const PodDescription = ({ podcast }: Props) => {
  return (
    <p className="hidden md:flex text-base">
      {podcast.description.substring(0, 200)}...
    </p>
  );
};

export default PodDescription;
