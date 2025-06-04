import React, { useState } from "react";
import discord from "../../assets/images/svg/discord.svg";
import twitter from "../../assets/images/svg/twitter.svg";
import logo from "../../assets/images/webp/header-image.webp";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileBtnClass = menuOpen
        ? "fixed top-1 right-5 z-[53]"
        : "absolute top-1 right-5 z-[52]";

    return (
        <div className="text-white flex items-center justify-between relative z-50 max-w-[1920px] mx-auto">
            <div className="relative">
                <img src={logo} alt="Logo" className="w-[250px] xl:w-[600px] md:w-[300px] object-contain cursor-pointer" />
                <h2 className="absolute xl:top-[35%] xl:right-[23%] top-[22%] right-[29%] md:font-black text-xl font-bold xl:text-3xl md:text-2xl ff-franklin">NEKOZUMA</h2>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li><a href="#overview" className="hover:text-blue-400 duration-200">Overview</a></li>
                    <li><a href="#story" className="hover:text-blue-400 duration-200">Story</a></li>
                    <li><a href="#team" className="hover:text-blue-400 duration-200">Team</a></li>
                </ul>
                <div className="flex items-center gap-4 xl:mr-56 lg:mr-20 mr-10">
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                        <img src={discord} alt="Discord" className="size-6 hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" className="size-6 hover:scale-110 transition duration-300" />
                    </a>
                </div>
            </div>
            <div className={`md:hidden ${mobileBtnClass}`}>
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="text-white text-3xl focus:outline-none"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center gap-6 z-[51] text-lg">
                    <a href="#overview" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Overview</a>
                    <a href="#story" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Story</a>
                    <a href="#team" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Team</a>
                    <div className="flex gap-6">
                        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
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
