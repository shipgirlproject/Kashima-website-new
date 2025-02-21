import { useState } from "react";
import MusicCompact from './MusicCompact';
import { Link } from 'react-router-dom';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  ChevronLeft,
  ChevronUp,
} from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* PC View */}
      <div className="hidden md:flex">
        <MusicCompact />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="bg-black text-white flex flex-col justify-between">
          {/* Header */}
          <div className="pb-8 pl-8 flex items-center">
            <Link to="/dashboard">
              <ChevronLeft className="w-10 h-10" />
            </Link>
          </div>
          
          <div className="flex flex-col justify-center flex-grow">
            {/* Album Cover */}
            <div className="flex justify-center">
              <img
                src="https://cdn-images.dzcdn.net/images/cover/7d0f5e386383f58e2b7b3c03921ab0e7/0x1900-000000-80-0-0.jpg"
                alt="Album Cover"
                className="w-[70vw] h-[70vw] rounded-lg"
              />
            </div>

            {/* Connection Info */}
            <div className="pt-4 text-center text-sm text-gray-400">
              <p className="text-[clamp(0.75rem,2vw,1rem)]">Guild Connected to: ShipGirls Community</p>
              <p className="text-[clamp(0.75rem,2vw,1rem)]">Music Server Connected to: server1</p>
              <p className="text-[clamp(0.75rem,2vw,1rem)]">Voice Connected to: Music</p>
            </div>

            {/* Song Info */}
            <div className="text-center mt-4">
              <h2 className="pt-4 text-[clamp(1.5rem,4vw,2.5rem)] font-bold">Selfish Machines</h2>
              <p className="text-gray-400 text-[clamp(1rem,2.5vw,1.5rem)]">Pierce The Veil</p>
            </div>
          </div>

          {/* Controls Section */}
          <div className="fixed bottom-0 w-full bg-black left-0">
            {/* Progress Bar */}
            <div className="pt-6 px-6">
              <input
                type="range"
                className="w-full cursor-pointer accent-pink-500 h-2"
                min="0"
                max="100"
                value="50"
                readOnly
              />
              <div className="flex justify-between text-[clamp(0.75rem,2vw,0.875rem)] text-gray-400 mt-1">
                <span>1:30</span>
                <span>2:55</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center px-6 mt-4 gap-4">
              <Repeat className="w-6 h-6 text-white" />
              <button className="rounded-full outline outline-1 w-14 h-14 flex justify-center items-center text-white">
                <SkipBack className="w-6 h-6 text-white fill-white" />
              </button>
              <button
                className="rounded-full outline outline-1 w-14 h-14 flex justify-center items-center text-white"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-white" />
                ) : (
                  <Play className="w-8 h-8 fill-white" />
                )}
              </button>
              <button className="rounded-full outline outline-1 w-14 h-14 flex justify-center items-center text-white">
                <SkipForward className="w-6 h-6 text-white fill-white" />
              </button>
              <Shuffle className="w-6 h-6 text-white" />
            </div>

            {/* Lyrics Button */}
            <div className="flex justify-center p-6">
              <button className="flex items-center text-white">
                <ChevronUp className="w-6 h-6" />
                <span className="ml-1 text-[clamp(0.875rem,2vw,1rem)]">Lyrics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
