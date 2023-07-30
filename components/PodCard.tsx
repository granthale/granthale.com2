import Image from "next/image";
import { Podcast } from "./Pods";
import { FaPlay, FaPause } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
  }, [isPlaying]);

  return (
    <div className="relative">
      <div className="bg-white border border-gray-500 rounded-b lg:rounded-b-none lg:rounded-r p-4">
        {/* Div for image / text */}
        {/* Image */}
        <div className="flex flex-none">
          <Link href={podcast.external_urls.spotify} target="_blank">
            <Image
              className="rounded-full"
              width={100}
              height={100}
              src="/images/surface-tension.png"
              alt="surface tension logo"
            />
          </Link>
        </div>
        {/* Text */}
        <div className="ml-4">
          <Link
            href={podcast.external_urls.spotify}
            className="text-gray-900 font-bold text-xl mb-2 hover:text-neon-green"
            target="_blank"
          >
            {podcast.name}
          </Link>
          <p className="hidden md:flex text-gray-700 text-base">
            {podcast.description.substring(0, 200)}...
          </p>
        </div>
        <br />
        {/* Authors, release date, play button */}
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <p className="text-gray-900 font-bold leading-none">
              Grant Hale & Sharad Doshi
            </p>
            <p className="text-gray-600">{podcast.release_date}</p>
          </div>
          <button
            onClick={togglePlayPause}
            className="bg-gray-500 p-4 rounded-full focus:outline-none"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}
