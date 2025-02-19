import { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const MusicCompact = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConnectionInfo, setShowConnectionInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-0 w-full left-0 bg-black text-white p-4 shadow-lg">
      
      {/* Connection Info (Toggled) */}
      {showConnectionInfo && (
        <div className="bg-darkGray p-4 w-[17rem] rounded-lg mb-[1rem]">
          <img
            src="https://cdn-images.dzcdn.net/images/cover/7d0f5e386383f58e2b7b3c03921ab0e7/0x1900-000000-80-0-0.jpg"
            alt="Album Cover"
            className="w-[15rem] h-[15rem] rounded-lg"
          />
          <div>
            <h2 className="text-xl font-bold">Selfish Machines</h2>
            <p className="text-gray-400">Pierce The Veil</p>
          </div>

          <div className="pt-[1rem] text-sm text-white">
            <p>Guild Connected to: ShipGirls Community</p>
            <p>Music Server Connected to: server1</p>
            <p>Voice Connected to: Music</p>
          </div>
        </div>
      )}

      {/* Song Info */}
      <div className="flex items-center space-x-4">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowConnectionInfo(!showConnectionInfo)}
        >
          <img
            src="https://cdn-images.dzcdn.net/images/cover/7d0f5e386383f58e2b7b3c03921ab0e7/0x1900-000000-80-0-0.jpg"
            alt="Album Cover"
            className="w-12 h-12 rounded-md cursor-pointer"
          />
          {isHovered && (
            <div className="absolute flex justify-end pb-4 items-center inset-0">

              {showConnectionInfo ? (
                <ChevronDown size={24} className="text-white bg-black bg-opacity-80 rounded-full" />
              ) : (
                <ChevronUp size={24} className="text-white bg-black bg-opacity-80 rounded-full" />
              )}

              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-darkGray text-white font-semibold text-xs px-2 py-1 rounded-md opacity-80">
                {showConnectionInfo ? "Collapse" : "Expand"}
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="font-bold">Selfish Machines</p>
          <p className="text-sm text-white">Pierce The Veil</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="100"
          value="50"
          className="w-full accent-pink-500"
        />
        <div className="flex justify-between text-sm text-white mt-1">
          <span>1:30</span>
          <span>2:55</span>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center space-x-6">
          <Repeat size={24} className="cursor-pointer text-white" />
          <SkipBack size={24} className="cursor-pointer text-white fill-white" />
          <button>
            {isPlaying ? (
              <Pause
                size={32}
                className="cursor-pointer text-white fill-white"
                onClick={() => setIsPlaying(false)}
              />
            ) : (
              <Play
                size={32}
                className="cursor-pointer text-white fill-white"
                onClick={() => setIsPlaying(true)}
              />
            )}
          </button>
          <SkipForward size={24} className="cursor-pointer text-white fill-white" />
          <Shuffle size={24} className="cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default MusicCompact;
