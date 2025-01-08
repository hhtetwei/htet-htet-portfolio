'use client';

import { useEffect, useRef, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCode, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import ModeToggleButton from './ModeToggleButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = !isDarkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-10 fixed z-50">
      <div className="w-full bg-baseClr flex justify-between p-2">
        <div className="w-full lg:w-[40%] flex lg:mt-2 lg:mx-20 justify-between">
          <div className="text-lg lg:text-2xl text-textClr font-bold flex gap-3">
            <div className="w-full p-5 xs:p-2 text-2xl">
              Htet Htet Portfolio
              <FontAwesomeIcon icon={faCode} className="w-8" />
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="flex md:hidden s:hidden sm:hidden gap-10 mr-10 p-5">
          <Link href="">
            <div className="text-2xl flex">
              <span className="text-headerClr">Home</span>
            </div>
          </Link>

          <div className="h-10 border-l border-boxAClr"></div>
          <Link href="">
            <div className="text-xl flex gap-2">
              <Image src="/image/linkedin.svg" alt="" width={20} height={20} />
              <span className="mt-1">LinkedIn</span>
            </div>
          </Link>

          <Link href="">
            <div className="text-xl flex gap-2">
              <Image src="/image/github.svg" alt="" width={30} height={30} />
              <span className="mt-1">Github</span>
            </div>
          </Link>

          <div className="-mt-2">
            <ModeToggleButton />
          </div>
        </div>

        {/* Mobile/Tablet Menu Icon */}
        <div className="hidden s:block sm:block md:block items-center mt-5">
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className="text-2xl text-textClr cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {menuOpen && (
        <div className="bg-baseClr w-full p-5 flex flex-col items-center xl:hidden twoXL:hidden threeXL:hidden">
          <div
            className="cursor-pointer text-headerClr mb-4 text-lg"
            onClick={() => handleScroll('home')}
          >
            Home
          </div>
          <div
            className="cursor-pointer text-headerClr mb-4 text-lg"
            onClick={() => handleScroll('about')}
          >
            About
          </div>
          <div
            className="cursor-pointer text-headerClr mb-4 text-lg"
            onClick={() => handleScroll('projects')}
          >
            Projects
          </div>
          <div
            className="cursor-pointer text-headerClr mb-4 text-lg"
            onClick={() => handleScroll('contact')}
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
}
