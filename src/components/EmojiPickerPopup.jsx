import {useState} from "react";
import {Image, X} from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const EmojiPickerPopup = ({icon, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleEmojiClick = (emoji) => {
        onSelect(emoji?.imageUrl || "");
        setIsOpen(false);
    }
    return (
        <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
            <div
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-4 cursor-pointer group">
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 rounded-xl group-hover:from-indigo-100 group-hover:to-purple-100 transition-all shadow-sm group-hover:shadow-md">
                    {icon ? (
                        <img src={icon} alt="Icon" className="w-12 h-12" />
                    ): (
                        <Image />
                    )}

                </div>
                <p className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">{icon ? "Change icon" : "Pick Icon"}</p>
            </div>

            {isOpen && (
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-slate-200 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all shadow-md">
                        <X size={16} />
                    </button>
                    <EmojiPicker
                        open={isOpen}
                        onEmojiClick={handleEmojiClick}
                    />
                </div>
            )}
        </div>
    )
}

export default EmojiPickerPopup;