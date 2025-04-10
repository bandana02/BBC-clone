import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";

const menuItems = [
    {
        category: "News",
        expandable: true,
        titles: [
            {
                title: "Crime",
                submenu: [
                    { title: "Crime 1" },
                    { title: "Crime 2" }
                ]
            },
            {
                title: "Health",
                submenu: [
                    { title: "Health 1" },
                    { title: "Health 2" }
                ]
            }
        ]
    },
    {
        category: "Sports",
        expandable: true,
        titles: [
            {
                title: "Game1",
                submenu: [
                    { title: "Cricket" },
                    { title: "Badminton" }
                ]
            },
            {
                title: "Game2",
                submenu: [
                    { title: "Hockey" },
                    { title: "Khokho" }
                ]
            }
        ]
    },
    {
        category: "Business",
        expandable: true,
        titles: [
            {
                title: "Nifty",
                submenu: [
                    { title: "NIfty 1" },
                    { title: "Nifty 2" }
                ]
            },
            {
                title: "Sensex",
                submenu: [
                    { title: "Sensex 1" },
                    { title: "Sensex 2" }
                ]
            }
        ]
    },
    {
        category: "Innovation",
        expandable: true,
        titles: [
            {
                title: "Science",
                submenu: [
                    { title: "Nasa 1" },
                    { title: "Nasa 2" }
                ]
            },
            {
                title: "Marketing",
                submenu: [
                    { title: "Digital 1" },
                    { title: "physical" }
                ]
            }
        ]
    },
    {
        category: "Travel",
        expandable: true,
        titles: [
            {
                title: "Foreign",
                submenu: [
                    { title: "USA" },
                    { title: "UK" }
                ]
            },
            {
                title: "India",
                submenu: [
                    { title: "Ladakh" },
                    { title: "Kashmir" }
                ]
            }
        ]
    },
    {
        category: "Earth",
        expandable: true,
        titles: [
            {
                title: "Nature",
                submenu: [
                    { title: "Greenary" },
                    { title: "Forest" }
                ]
            },
            {
                title: "Aminal",
                submenu: [
                    { title: "Wild animals" },
                    { title: "Pet Animals" }
                ]
            }
        ]
    },
    {
        category: "Audio",
        expandable: true,
        titles: [
            {
                title: "Music",
                submenu: [
                    { title: "Pop" },
                    { title: "Classical" }
                ]
            },
            {
                title: "Video",
                submenu: [
                    { title: "Educational" },
                    { title: "Enetrtainement" }
                ]
            }
        ]
    },

];

export default function Sidebar({ isOpen, onClose }) {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedTitle, setExpandedTitle] = useState({});
    const sidebarRef = useRef(null);

    const toggleCategory = (category) => {
        setExpandedCategory((prev) => (prev === category ? null : category)); // Toggle category expansion
    };

    const toggleTitle = (category, title) => {
        setExpandedTitle((prev) => ({
            ...prev,
            [category]: prev[category] === title ? null : title, // Toggle specific title within the category
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
        <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}>
            {/* Backdrop */}
            {isOpen && <div className="absolute inset-0 bg-black opacity-30" />}

            {/* Sidebar Panel */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 ease-in-out z-50
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
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
                        <li key={idx} className="border-t pt-2 pb-1">
                            {/* Category (Main Menu) */}
                            <div
                                className="font-bold text-gray-700 cursor-pointer flex justify-between"
                                onClick={() => toggleCategory(item.category)}
                            >
                                {item.category}
                                {item.expandable && (
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${expandedCategory === item.category ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                            </div>

                            {/* Show Titles when Category is Expanded */}
                            {expandedCategory === item.category && (
                                <ul className="space-y-2 mt-2">
                                    {item.titles.map((subItem, subIdx) => (
                                        <li key={subIdx}>
                                            {/* Title (Submenu) */}
                                            <div
                                                className="cursor-pointer flex justify-between items-center"
                                                onClick={() => toggleTitle(item.category, subItem.title)}
                                            >
                                                <span
                                                    className={`${subItem.title === "News" ? "text-red-700 font-bold" : ""
                                                        }`}
                                                >
                                                    {subItem.title}
                                                </span>
                                                {item.expandable && (
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition-transform ${expandedTitle[item.category] === subItem.title
                                                            ? "rotate-180"
                                                            : ""
                                                            }`}
                                                    />
                                                )}
                                            </div>

                                            {/* Show Submenu when Title is Expanded */}
                                            {expandedTitle[item.category] === subItem.title && (
                                                <ul className="ml-4 mt-2 space-y-1 text-gray-500 text-sm">
                                                    {subItem.submenu.map((a, i) => (
                                                        <li key={i}>{a.title}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
