import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Settings {
    afk: boolean;
    welcomeMessage: string;
    welcomeChannel: string;
    moderationChannel: string;
    guildChannel: string;
    messageChannel: string;
    memberChannel: string;
    suggestionChannel: string;
    starboardChannel: string;
    starboardReactionCount: string;
    starboardEmoji: string;
    suggestionEmojiApprove: string;
    suggestionEmojiNo: string;
}

interface SettingsContextType {
    settings: Settings;
    setSettings: React.Dispatch<React.SetStateAction<Settings>>;
    handleToggle: (key: keyof Settings) => void;
    handleSelectChange: (key: keyof Settings, value: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
    const [settings, setSettings] = useState<Settings>({
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

    const handleToggle = (key: keyof Settings) => {
        setSettings((prev) => ({
            ...prev,
            [key]: typeof prev[key] === "boolean" ? !prev[key] : prev[key],
        }));
    };

    const handleSelectChange = (key: keyof Settings, value: string) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <SettingsContext.Provider value={{ settings, setSettings, handleToggle, handleSelectChange }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
}
