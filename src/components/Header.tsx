'use client';

import '@fortawesome/fontawesome-free/css/all.css';
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCode } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full bg-baseClr flex justify-between lg:p-10 p-5">
        <div className="w-full lg:w-[40%] flex lg:mt-2 lg:mx-20 justify-between">
          <div className="text-lg lg:text-2xl text-textClr font-bold flex gap-3">
            <div className="w-full p-5 xs:p-2 text-2xl">
              Htet Htet Portfolio
              <FontAwesomeIcon icon={faCode} className="w-8 lg:mt-0" />
            </div>
          </div>

          {/* <div className="hidden xs:block xxs:block s:block ss:block">
            <div className="flex justify-end items-end mt-4 xs:p-2">
              <IconButton onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="text-2xl" />
                )}
              </IconButton>
            </div>
          </div> */}
        </div>

        <div className="xxs:hidden xs:hidden block s:hidden ss:hidden">
          <div className="w-full flex gap-10 mr-10 p-5">
            <Link href="">
              <div className="text-2xl flex">
                <span className="text-headerClr">Home</span>
              </div>
            </Link>

            <div className="h-10 border-l border-boxAClr"></div>
            <Link href="">
              <div className="text-xl flex gap-2">
                <Image
                  src="/image/linkedin.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="mt-1">Linkdin</span>
              </div>
            </Link>

            <Link href="">
              <div className="text-xl flex gap-2">
                <Image
                  src="/image/telegram.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className="mt-1">Facebook</span>
              </div>
            </Link>

            <Link href="">
              <div className="text-xl flex gap-2">
                <Image src="/image/github.svg" alt="" width={30} height={30} />
                <span className="mt-1">Github</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
