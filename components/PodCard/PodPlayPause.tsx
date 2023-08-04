import { FaPlay, FaPause } from "react-icons/fa";

interface Props {
  togglePlayPause: () => void;
  isPlaying: boolean;
}

const PodPlayPause = ({ togglePlayPause, isPlaying }: Props) => {
  return (
    <button
      onClick={togglePlayPause}
      className="p-4 rounded-full focus:outline-none"
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
};

export default PodPlayPause;
