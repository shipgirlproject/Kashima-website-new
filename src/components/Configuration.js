import React, { useState } from "react";

function Configuration() {
  const [settings, setSettings] = useState({
    afk: false,
    autoMod: true,
    welcomeMessage: "Welcome to the server!",
    welcomeChannel: "general",
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Configuration Settings</h1>

      {/* General Settings */}
      <h2 className="text-xl font-semibold mb-4">General Settings</h2>
      <div className="relative w-full mb-12">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#3f4147] to-transparent mx-auto w-5/3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AFK Mode Toggle */}
        <div className="p-4 bg-[#1e1f22] rounded-lg flex justify-between items-center">
          <span>AFK Mode</span>
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

        {/* Auto Moderation Toggle */}
        <div className="p-4 bg-[#1e1f22] rounded-lg flex justify-between items-center">
          <span>AFK Interactions</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={settings.autoMod}
              onChange={() => handleToggle("autoMod")}
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
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]">
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>

          <input
            type="text"
            value={settings.welcomeMessage}
            onChange={(e) => handleSelectChange("welcomeMessage", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-[#2b2d31] rounded-lg text-white hover:bg-[#35373c]" />
        </div>
      </div>
    </div>
  );
}

export default Configuration;
