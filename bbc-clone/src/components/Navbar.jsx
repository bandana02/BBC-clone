import React from "react";
import { Menu, Search } from "lucide-react"; // Icons for menu & search
import { Link } from "react-router-dom";

const Navbar = ({ onMenuClick }) => {
    let data = [
        {
            label: "Home",
            path: '/'
        },
        {
            label: "News",
            path: '/news'
        },
        {
            label: "Sport",
            path: '/sport'
        },
        {
            label: "Business",
            path: '/business'
        },
        {
            label: "Innovation",
            path: '/innovation'
        },
        {
            label: "Culture",
            path: '/culture'
        },
        {
            label: "Arts",
            path: '/arts'
        },
        {
            label: "Travel",
            path: '/travel'
        },
        {
            label: "Earth",
            path: '/earth'
        },
        {
            label: "Audio",
            path: '/audio'
        },
        {
            label: "Video",
            path: '/video'
        },
        {
            label: "Live",
            path: '/live'
        }
    ];

    return (
        <nav className="bg-white shadow-md p-4">
            {/* Top Bar */}
            <div className="flex justify-between items-center">
                {/* Left: Menu & Search */}
                <div className="flex items-center gap-4">
                    <button onClick={onMenuClick} className="text-2xl">
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
                {data?.map((item, i) => (
                    <Link key={i} to={item?.path} className="hover:underline">
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
