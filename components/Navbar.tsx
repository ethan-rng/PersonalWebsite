"use client"

import React, { useState, useEffect } from 'react';
import { NavBarItems, logoImage } from "@/constants";
import Image from 'next/image';
import Link from 'next/link';
import Toggle from "./Toggle/Toggle";

const Navbar = () => {
    const [currentId, setCurrentId] = useState("Home");
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (e: any, item: any) => {
        e.preventDefault(); // Prevent default anchor behavior
        setCurrentId(item);
        window.location.href = e.currentTarget.href; // Navigate after state is set
    }

    return (
        <div className={`fixed w-4/5 z-30 ${darkMode ? 'dark:bg-secondary' : 'bg-darkSecondary'} ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'} ${(isScrolled && !darkMode) ? 'dark:bg-opacity-90' : 'dark:bg-opacity-100'} flex justify-between items-center rounded-3xl py-4 px-4`}>
            {/* Logo */}
            <Link className="flex items-center space-x-4" href="/">
                    <Image
                        src={darkMode ? logoImage.dark : logoImage.light}
                        width={50}
                        height={35}
                        alt="logo"
                        priority // Improves load time for critical image
                    />
            </Link>

            {/* Navbar Items */}
            <div className='flex items-center justify-between w-1/2'>
                {NavBarItems.map((item, index) => (
                    <div key={index} className="group flex items-center h-full text-xl">
                        <Link href={item.link}
                            className="flex items-center h-full hover:text-tertiary dark:text-black text-white" onClick={(e) => handleClick(e, item.text)}>
                                {/* Dot Next to The Current Element */}
                                <div className={`${currentId === item.text ? "rounded-full p-1 mr-2 dark:bg-black bg-white group-hover:bg-tertiary" : "hidden"}`} />
                                {item.text}
                            
                        </Link>
                    </div>
                ))}
            </div>

            {/* Light/Dark Mode Toggle */}
            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}

export default Navbar;
