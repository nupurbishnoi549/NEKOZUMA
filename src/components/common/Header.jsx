import React, { useState } from "react";
import discord from "../../assets/images/svg/discord.svg";
import twitter from "../../assets/images/svg/twitter.svg";
import logo from "../../assets/images/webp/header-image.webp";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="text-white flex items-center justify-between relative z-50 max-w-[1920px] mx-auto">
            <img src={logo} alt="Logo" className="w-[250px] lg:w-[480px] md:w-[300px] object-contain cursor-pointer" />
            <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li><a href="#overview" className="hover:text-blue-400 duration-200">Overview</a></li>
                    <li><a href="#story" className="hover:text-blue-400 duration-200">Story</a></li>
                    <li><a href="#team" className="hover:text-blue-400 duration-200">Team</a></li>
                </ul>
                <div className="flex items-center gap-4 xl:mr-56 lg:mr-20 mr-10">
                    <a href="https://discord.com/channels" target="_blank" rel="noopener noreferrer">
                        <img src={discord} alt="Discord" className="size-6 hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" className="size-6 hover:scale-110 transition duration-300" />
                    </a>
                </div>
            </div>
            <div className="md:hidden z-50 mr-3">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none text-3xl">
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-3 z-40 text-lg transition-all duration-300">
                    <a href="#overview" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Overview</a>
                    <a href="#story" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Story</a>
                    <a href="#team" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Team</a>
                    <div className="flex gap-6">
                        <a href="https://discord.com/channels" target="_blank" rel="noopener noreferrer">
                            <img src={discord} alt="Discord" className="size-6 hover:scale-110 transition duration-300" />
                        </a>
                        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" className="size-6 hover:scale-110 transition duration-300" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
