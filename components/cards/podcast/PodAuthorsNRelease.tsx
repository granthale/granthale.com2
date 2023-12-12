import { Podcast } from "../../Pods";

interface Props {
  podcast: Podcast;
}

const PodAuthorsNRelease = ({ podcast }: Props) => {
  return (
    <div className="text-sm">
      <p className="font-bold leading-none">Grant Hale & Sharad Doshi</p>
      <p>{podcast.release_date}</p>
    </div>
  );
};

export default PodAuthorsNRelease;
