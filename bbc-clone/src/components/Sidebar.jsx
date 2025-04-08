import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";

const menuItems = [
    { title: "Home" },
    { title: "News", expandable: true },
    { title: "Sport" },
    { title: "Business", expandable: true },
    { title: "Innovation", expandable: true },
    { title: "Culture", expandable: true },
    { title: "Arts", expandable: true },
    { title: "Travel", expandable: true },
    { title: "Earth", expandable: true },
    { title: "Audio", expandable: true },
    { title: "Video", expandable: true },
    { title: "Live", expandable: true },
];

export default function Sidebar({ isOpen, onClose }) {
    const [expanded, setExpanded] = useState({});
    const sidebarRef = useRef(null);

    const toggleExpand = (title) => {
        setExpanded((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
            {/* Backdrop */}
            {isOpen && (
                <div className="absolute inset-0 bg-black opacity-30" />
            )}

            {/* Sidebar Panel */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 ease-in-out z-50
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                {/* Close button */}
                <div className="p-4 border-b flex justify-end">
                    <button onClick={onClose}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Search bar */}
                <div className="p-4 border-b">
                    <div className="flex border border-gray-300 rounded overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search news, topics and more"
                            className="px-2 py-1 w-full text-sm outline-none"
                        />
                        <button className="bg-black text-white px-2">
                            <Search className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Menu list */}
                <ul className="p-4 space-y-1">
                    {menuItems.map((item, idx) => (
                        <li
                            key={idx}
                            className="border-t pt-2 pb-1 cursor-pointer"
                            onClick={() => item.expandable && toggleExpand(item.title)}
                        >
                            <div className="flex justify-between items-center">
                                <span className={`${item.title === "News" ? "text-red-700 font-bold" : ""}`}>
                                    {item.title}
                                </span>
                                {item.expandable && <ChevronDown size={16} />}
                            </div>

                            {item.expandable && expanded[item.title] && (
                                <ul className="ml-4 mt-2 space-y-1 text-gray-500 text-sm">
                                    <li>Submenu 1</li>
                                    <li>Submenu 2</li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
