import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState({
        afk: true,
        welcomeMessage: "Welcome to the server!",
        welcomeChannel: "general",
        moderationChannel: "general",
        guildChannel: "general",
        messageChannel: "general",
        memberChannel: "general",
        suggestionChannel: "general",
        starboardChannel: "general",
        starboardReactionCount: "3",
        starboardEmoji: "⭐",
        suggestionEmojiApprove: "✅",
        suggestionEmojiNo: "❎"
    });

    const handleToggle = (key) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleSelectChange = (key, value) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setActiveEmojiPicker(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <SettingsContext.Provider value={{ 
            settings, 
            setSettings, 
            handleToggle, 
            handleSelectChange 
            }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}
