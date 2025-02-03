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
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-2/3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AFK Mode Toggle */}
        <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
          <span>AFK Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={settings.afk}
              onChange={() => handleToggle("afk")}
            />
            <div className="w-11 h-6 bg-gray-500 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>

        {/* Auto Moderation Toggle */}
        <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
          <span>Auto Moderation</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={settings.autoMod}
              onChange={() => handleToggle("autoMod")}
            />
            <div className="w-11 h-6 bg-gray-500 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
      </div>

      {/* Welcomer Settings */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Welcomer Settings</h2>
      <div className="relative w-full mb-12">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a3a4a5] to-transparent mx-auto w-2/3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 rounded-lg">
        <label className="block text-sm font-medium mb-1">Welcome Message</label>

        <select
            value={settings.welcomeChannel}
            onChange={(e) => handleSelectChange("welcomeChannel", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-gray-600 rounded-lg text-white">
            <option>general</option>
            <option>welcome</option>
            <option>announcements</option>
          </select>

          <input
            type="text"
            value={settings.welcomeMessage}
            onChange={(e) => handleSelectChange("welcomeMessage", e.target.value)}
            className="mt-[1rem] w-full p-2 bg-gray-600 rounded-lg text-white"/>
        </div>
      </div>
    </div>
  );
}

export default Configuration;
