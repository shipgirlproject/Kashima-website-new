import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, ChevronLeft, ChevronUp } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-black text-white flex flex-col justify-between">
      {/* Header */}
      <div className="pb-[4rem] pl-[3rem] flex items-center">
        <ChevronLeft className="w-[3rem] h-[3rem]" />
      </div>

      {/* Album Cover */}
      <div className="flex justify-center">
        <img
          src="https://cdn-images.dzcdn.net/images/cover/7d0f5e386383f58e2b7b3c03921ab0e7/0x1900-000000-80-0-0.jpg"
          alt="Album Cover"
          className="w-[20rem] h-[20rem] rounded-lg"
        />
      </div>

      {/* Connection Info */}
      <div className="pt-[1rem] text-center text-sm text-gray-400">
        <p>Guild Connected to: ShipGirls Community</p>
        <p>Music Server Connected to: server1</p>
        <p>Voice Connected to: Music</p>
      </div>

      {/* Song Info */}
      <div className="text-center mt-2">
        <h2 className="pt-[5rem] text-2xl font-bold">Selfish Machines</h2>
        <p className="text-gray-400">Pierce The Veil</p>
      </div>

      {/* Progress Bar */}
      <div className="pt-[5rem] px-6 mt-2">
        <input
          type="range"
          className="w-full cursor-pointer accent-pink-500"
          min="0"
          max="100"
          value="50"
          readOnly
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1:30</span>
          <span>2:55</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center px-6 mt-2">
        <Repeat className="w-6 h-6 text-white" />
        <button
          className="rounded-full outline outline-1 w-14 h-14 flex justify-center items-center text-white"
        >
        <SkipBack className="w-6 h-6 text-white fill-white" />
        </button>
        <button
          className="rounded-full outline outline-1 w-14 h-14 flex justify-center items-center text-white"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white" />}
        </button>
        <button
          className="rounded-full outline outline-1 w-14 h-14 flex justify-center items-center text-white"
        >
        <SkipForward className="w-6 h-6 text-white fill-white" />
        </button>
        <Shuffle className="w-6 h-6 text-white" />
      </div>

      {/* Lyrics Button */}
      <div className="flex justify-center p-6">
        <button className="flex items-center text-white">
          <ChevronUp className="w-6 h-6" />
          <span className="ml-1">Lyrics</span>
        </button>
      </div>
    </div>
  );
}
