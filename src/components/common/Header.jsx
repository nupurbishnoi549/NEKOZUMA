import React, { useState } from "react";
import Discord from "../../assets/images/svg/discord.svg";
import Twitter from "../../assets/images/svg/twitter.svg";
import Logo from "../../assets/images/webp/header-image.webp";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className=" text-white max-md:px-6 py-4 flex items-center justify-between relative z-50">
            <img src={Logo} alt="Logo" className="w-[180px] md:w-[280px] object-contain" />

            <nav className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li><a href="#overview" className="hover:text-blue-400 duration-200">Overview</a></li>
                    <li><a href="#story" className="hover:text-blue-400 duration-200">Story</a></li>
                    <li><a href="#team" className="hover:text-blue-400 duration-200">Team</a></li>
                </ul>
                <div className="flex items-center gap-4 mr-20">
                    <a href="https://discord.com/channels" target="_blank" rel="noopener noreferrer">
                        <img src={Discord} alt="Discord" className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                    </a>
                </div>
            </nav>
            <div className="md:hidden z-50">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none text-4xl">
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-black px-6 py-4 flex flex-col gap-4 lg:hidden shadow-xl z-40">
                    <a href="#overview" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Overview</a>
                    <a href="#story" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Story</a>
                    <a href="#team" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Team</a>
                    <div className="flex gap-4 mt-2">
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
