import React from "react";
import Picker from "@emoji-mart/react";
import { useSettings } from "../context/SettingsContext";
import { useEmoji } from "../context/EmojiContext";

const Configuration: React.FC = () => {
  const {
    emojis,
    activeEmojiPicker,
    handleEmojiSelect,
    handleEmojiPickerToggle,
    starboardPickerRef,
    suggestionNonPickerRef,
    suggestionApprovePickerRef
  } = useEmoji();

  const { settings, handleToggle, handleSelectChange } = useSettings();

  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Configuration Settings</h1>

      {/* General Settings */}
      <h2 className="text-xl font-semibold mb-4">General Settings</h2>
      <div className="relative w-full mb-12">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#3f4147] to-transparent mx-auto w-5/3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AFK Interactions Toggle */}
        <div className="p-4 bg-[#1e1f22] rounded-lg flex justify-between items-center">
          <span>AFK Interactions</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={settings.afk}
              onChange={() => handleToggle("afk")}
            />
            <div className="w-11 h-6 bg-[#2b2d31] peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4752c4]"></div>
          </label>
        </div>
      </div>

      {/* Welcomer Settings */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Welcomer Settings</h2>
      <div className="relative w-full mb-12">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#3f4147] to-transparent mx-auto w-5/3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-[#1e1f22] rounded-lg">
          <label className="block text-sm font-medium mb-1">Welcome Message</label>
          <select
            value={settings.welcomeChannel}
            onChange={(e) => handleSelectChange("welcomeChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]"
          >
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>

          <input
            type="text"
            value={settings.welcomeMessage}
            onChange={(e) => handleSelectChange("welcomeMessage", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]"
          />
        </div>
      </div>

      {/* Logs Settings */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Moderation Logs</h2>
      <div className="relative w-full mb-12">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#3f4147] to-transparent mx-auto w-5/3"></div>
      </div>

      {/* Moderation Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-[#1e1f22] rounded-lg">
          <label className="block text-sm font-medium mb-1">Moderation Logs</label>

          <select
            value={settings.moderationChannel}
            onChange={(e) => handleSelectChange("moderationChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]">
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>
        </div>

        {/* Guild Settings */}
        <div className="p-4 bg-[#1e1f22] rounded-lg">
          <label className="block text-sm font-medium mb-1">Guild Logs</label>

          <select
            value={settings.guildChannel}
            onChange={(e) => handleSelectChange("guildChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]">
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>
        </div>

        {/* Message Settings */}
        <div className="p-4 bg-[#1e1f22] rounded-lg">
          <label className="block text-sm font-medium mb-1">Message Logs</label>

          <select
            value={settings.messageChannel}
            onChange={(e) => handleSelectChange("messageChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]">
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>
        </div>

        {/* Member Settings */}
        <div className="p-4 bg-[#1e1f22] rounded-lg">
          <label className="block text-sm font-medium mb-1">Member Logs</label>

          <select
            value={settings.memberChannel}
            onChange={(e) => handleSelectChange("memberChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]">
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>
        </div>
      </div>

      {/* Suggestion Settings */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Suggestion Settings</h2>
      <div className="relative w-full mb-12">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#3f4147] to-transparent mx-auto w-5/3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-[#1e1f22] rounded-lg">
          <label className="block text-sm font-medium mb-1">Suggestion Channel</label>
          <select
            value={settings.suggestionChannel}
            onChange={(e) => handleSelectChange("suggestionChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]"
          >
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>

          {/* Emoji Selectors */}
          <label className="block text-sm font-medium mt-3">Reaction Emojis</label>
          <div className="grid grid-cols-2 gap-4 mt-2">

            {/* Approve Emoji Picker */}
            <div className="relative" ref={suggestionApprovePickerRef}>
              <button
                onClick={() => handleEmojiPickerToggle("suggestionEmojiApprove")}
                className="w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c] flex items-center justify-between"
              >
                <span>{emojis.suggestionEmojiApprove}</span>
                <span className="text-gray-400">🩶</span>
              </button>

              {activeEmojiPicker === "suggestionEmojiApprove" && (
                <div ref={suggestionApprovePickerRef} className="absolute z-50 mt-[-30rem] ml-[-2.5rem] bg-[#1e1f22] shadow-lg rounded-lg p-2">
                  <Picker onEmojiSelect={(emoji: { native: string }) => handleEmojiSelect("suggestionEmojiApprove", emoji)} theme="dark" />
                </div>
              )}
            </div>

            {/* Reject Emoji Picker */}
            <div className="relative" ref={suggestionNonPickerRef}>
              <button
                onClick={() => handleEmojiPickerToggle("suggestionEmojiNo")}
                className="w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c] flex items-center justify-between"
              >
                <span>{emojis.suggestionEmojiNo}</span>
                <span className="text-gray-400">🩶</span>
              </button>

              {activeEmojiPicker === "suggestionEmojiNo" && (
                <div ref={suggestionNonPickerRef} className="absolute z-50 mt-[-30rem] ml-[-13.5rem] bg-[#1e1f22] shadow-lg rounded-lg p-2">
                  <Picker onEmojiSelect={(emoji: { native: string }) => handleEmojiSelect("suggestionEmojiNo", emoji)} theme="dark" />
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
      {/* Starboard Settings */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Starboard Settings</h2>
      <div className="relative w-full mb-12">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#3f4147] to-transparent mx-auto w-5/3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-[#1e1f22] rounded-lg">
          <label className="block text-sm font-medium mb-1">Starboard Channel</label>

          <select
            value={settings.starboardChannel}
            onChange={(e) => handleSelectChange("starboardChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]"
          >
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>

          <label className="block text-sm font-medium mt-3">Reaction Emoji</label>
          <div className="relative" ref={starboardPickerRef}>
            <button
              onClick={() => handleEmojiPickerToggle("starboardEmoji")}
              className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c] flex items-center justify-between"
            >
              <span>{emojis.starboardEmoji}</span>
              <span className="text-gray-400">🩶</span>
            </button>

            {activeEmojiPicker === "starboardEmoji" && (
              <div ref={starboardPickerRef} className="absolute z-50 mt-[-30rem] ml-[-8rem] bg-[#1e1f22] shadow-lg rounded-lg p-2">
                <Picker onEmojiSelect={(emoji: { native: string }) => handleEmojiSelect("starboardEmoji", emoji)} theme="dark" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configuration;
