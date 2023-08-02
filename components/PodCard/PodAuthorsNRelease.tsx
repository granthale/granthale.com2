import { Podcast } from "../Pods";

interface Props {
  podcast: Podcast;
}

const PodAuthorsNRelease = ({ podcast }: Props) => {
  return (
    <div className="text-sm">
      <p className="text-gray-900 font-bold leading-none">
        Grant Hale & Sharad Doshi
      </p>
      <p className="text-gray-600">{podcast.release_date}</p>
    </div>
  );
};

export default PodAuthorsNRelease;
