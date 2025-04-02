import React from "react";
import { Menu, Search } from "lucide-react"; // Icons for menu & search

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4">
            {/* Top Bar */}
            <div className="flex justify-between items-center">
                {/* Left: Menu & Search */}
                <div className="flex items-center gap-4">
                    <button className="text-2xl">
                        <Menu size={24} />
                    </button>
                    <button className="text-2xl">
                        <Search size={24} />
                    </button>
                </div>

                {/* Center: BBC Logo */}
                <div className="flex gap-1">
                    <span className="bg-black text-white px-2 py-1 text-lg font-bold">B</span>
                    <span className="bg-black text-white px-2 py-1 text-lg font-bold">B</span>
                    <span className="bg-black text-white px-2 py-1 text-lg font-bold">C</span>
                </div>

                {/* Right: Register & Sign In */}
                <div className="flex gap-4">
                    <button className="bg-black text-white px-4 py-2 rounded-md font-medium">
                        Register
                    </button>
                    <button className="text-black font-medium">Sign In</button>
                </div>
            </div>

            {/* Bottom Navigation Links */}
            <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
                {[
                    "Home",
                    "News",
                    "Sport",
                    "Business",
                    "Innovation",
                    "Culture",
                    "Arts",
                    "Travel",
                    "Earth",
                    "Audio",
                    "Video",
                    "Live",
                ].map((item) => (
                    <a key={item} href="#" className="hover:underline">
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
