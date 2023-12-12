import { Podcast } from "../../Pods";
import { useEffect, useRef, useState } from "react";
import PodImage from "./PodImage";
import PodTitle from "./PodTitle";
import PodDescription from "./PodDescription";
import PodAuthorsNRelease from "./PodAuthorsNRelease";
import PodPlayPause from "./PodPlayPause";

interface Props {
  podcast: Podcast;
}

export default function PodCard({ podcast }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(podcast.audio_preview_url);
  }, []);

  const togglePlayPause = () => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }

    // This function will be called when the component is unmounted
    return () => {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause the audio
        audioRef.current.currentTime = 0; // Optionally, reset the playback position
      }
    };
  }, [isPlaying]);

  return (
    <div key={podcast.id}>
      <div className="rounded-b border lg:rounded-b-none lg:rounded-r p-4 hover:text-neon-green">
        <div className="flex">
          <PodImage podcast={podcast}></PodImage>
          <div className="ml-4">
            <PodTitle podcast={podcast}></PodTitle>
            <PodDescription podcast={podcast}></PodDescription>
          </div>
        </div>
        <br />
        <div className="flex items-center justify-between">
          <PodAuthorsNRelease podcast={podcast}></PodAuthorsNRelease>
          <PodPlayPause
            togglePlayPause={togglePlayPause}
            isPlaying={isPlaying}
          />
        </div>
      </div>
      <br />
    </div>
  );
}
