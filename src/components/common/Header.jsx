import React, { useState } from "react";
import Discord from "../../assets/images/svg/discord.svg";
import Twitter from "../../assets/images/svg/twitter.svg";
import Logo from "../../assets/images/webp/header-image.webp";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="text-white max-md:px-2 max-md:py-2 flex items-center justify-between relative z-50">
            <img src={Logo} alt="Logo" className="w-[240px] lg:w-[480px] md:w-[300px] object-contain cursor-pointer" />
            <nav className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li><a href="#overview" className="hover:text-blue-400 duration-200">Overview</a></li>
                    <li><a href="#story" className="hover:text-blue-400 duration-200">Story</a></li>
                    <li><a href="#team" className="hover:text-blue-400 duration-200">Team</a></li>
                </ul>
                <div className="flex items-center gap-4 xl:mr-56 lg:mr-20 mr-10">
                    <a href="https://discord.com/channels" target="_blank" rel="noopener noreferrer">
                        <img src={Discord} alt="Discord" className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                    </a>
                </div>
            </nav>
            <div className="md:hidden z-50">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none text-5xl">
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 z-40 text-lg transition-all duration-300">
                    <a href="#overview" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Overview</a>
                    <a href="#story" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Story</a>
                    <a href="#team" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Team</a>
                    <div className="flex gap-6 mt-4">
                        <a href="https://discord.com/channels" target="_blank" rel="noopener noreferrer">
                            <img src={Discord} alt="Discord" className="w-6 h-6" />
                        </a>
                        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
