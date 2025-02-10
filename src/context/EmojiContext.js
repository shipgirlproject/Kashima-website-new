import { createContext, useContext, useState, useRef, useEffect } from "react";

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
    const [activeEmojiPicker, setActiveEmojiPicker] = useState(null);
    const [emojis, setEmojis] = useState({
        suggestionEmojiApprove: "✅",
        suggestionEmojiNo: "❎",
        starboardEmoji: "⭐",
    });

    const starboardPickerRef = useRef(null);
    const suggestionApprovePickerRef = useRef(null);
    const suggestionNonPickerRef = useRef(null);

    const handleEmojiSelect = (key, emoji) => {
        setEmojis((prev) => ({ ...prev, [key]: emoji.native }));
        setActiveEmojiPicker(null); 
    };

    const handleEmojiPickerToggle = (picker) => {
        setActiveEmojiPicker((prev) => (prev === picker ? null : picker));
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                (starboardPickerRef.current && starboardPickerRef.current.contains(event.target)) ||
                (suggestionApprovePickerRef.current && suggestionApprovePickerRef.current.contains(event.target)) ||
                (suggestionNonPickerRef.current && suggestionNonPickerRef.current.contains(event.target))
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
    return useContext(EmojiContext);
}
