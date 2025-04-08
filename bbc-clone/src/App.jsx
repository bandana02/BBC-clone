import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsSection from "./components/Newssection";
import SinglePost from "./components/Singlepost";
import Sidebar from "./components/Sidebar";
import { Menu } from "lucide-react"; // Optional, if you need menu icon here

function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="relative min-h-screen">
            {/* Navbar with menu toggle */}
            <Navbar onMenuClick={() => setShowSidebar(true)} onClose={() => setShowSidebar(false)} />

            {/* Sidebar */}
            <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />

            {/* Main content area */}
            <main className={`transition-all duration-300 ${showSidebar ? 'blur-sm' : ''}`}>
                <Routes>
                    <Route path="/" element={<NewsSection />} />
                    <Route path="/article/:id" element={<SinglePost />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
