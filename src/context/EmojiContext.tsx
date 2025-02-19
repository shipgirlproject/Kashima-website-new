import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

interface Emojis {
    suggestionEmojiApprove: string;
    suggestionEmojiNo: string;
    starboardEmoji: string;
}

interface EmojiContextType {
    emojis: Emojis;
    activeEmojiPicker: string | null;
    handleEmojiSelect: (key: keyof Emojis, emoji: { native: string }) => void;
    handleEmojiPickerToggle: (picker: string) => void;
    starboardPickerRef: React.RefObject<HTMLDivElement>;
    suggestionApprovePickerRef: React.RefObject<HTMLDivElement>;
    suggestionNonPickerRef: React.RefObject<HTMLDivElement>;
}

const EmojiContext = createContext<EmojiContextType | undefined>(undefined);

export function EmojiProvider({ children }: { children: ReactNode }) {
    const [activeEmojiPicker, setActiveEmojiPicker] = useState<string | null>(null);
    const [emojis, setEmojis] = useState<Emojis>({
        suggestionEmojiApprove: "✅",
        suggestionEmojiNo: "❎",
        starboardEmoji: "⭐",
    });

    const starboardPickerRef = useRef<HTMLDivElement>(null!);
    const suggestionApprovePickerRef = useRef<HTMLDivElement>(null!);
    const suggestionNonPickerRef = useRef<HTMLDivElement>(null!);

    const handleEmojiSelect = (key: keyof Emojis, emoji: { native: string }) => {
        setEmojis((prev) => ({ ...prev, [key]: emoji.native }));
        setActiveEmojiPicker(null);
    };

    const handleEmojiPickerToggle = (picker: string) => {
        setActiveEmojiPicker((prev) => (prev === picker ? null : picker));
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                (starboardPickerRef.current && starboardPickerRef.current.contains(event.target as Node)) ||
                (suggestionApprovePickerRef.current && suggestionApprovePickerRef.current.contains(event.target as Node)) ||
                (suggestionNonPickerRef.current && suggestionNonPickerRef.current.contains(event.target as Node))
            ) {
                return;
            }
            setActiveEmojiPicker(null);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <EmojiContext.Provider value={{
            emojis,
            activeEmojiPicker,
            handleEmojiSelect,
            handleEmojiPickerToggle,
            starboardPickerRef,
            suggestionApprovePickerRef,
            suggestionNonPickerRef,
        }}>
            {children}
        </EmojiContext.Provider>
    );
}

export function useEmoji() {
    const context = useContext(EmojiContext);
    if (!context) {
        throw new Error("useEmoji must be used within an EmojiProvider");
    }
    return context;
}