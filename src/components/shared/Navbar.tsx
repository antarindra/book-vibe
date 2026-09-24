"use client";

import React from 'react';
import Image from 'next/image';
import logo from '@/assets/book.ico';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Books', path: '/books' },
    { name: 'Pages to Read', path: '/pages-to-read' },
  ];

  const links = (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`font-semibold rounded-lg px-4 py-2 transition-all ${
                isActive
                  ? 'border border-[#23BE0A] text-[#23BE0A]'
                  : 'text-[#131313CC] hover:text-[#23BE0A]'
              }`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <nav className="w-full bg-base-100 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        
      
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Book Vibe Logo" width={32} height={32} />
          <span className="text-2xl font-bold text-[#131313]">Book Vibe</span>
        </Link>

        
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-2 menu-horizontal">
            {links}
          </ul>
        </div>

      
        <div className="flex items-center gap-3">
          <button className="bg-[#23BE0A] hover:bg-[#1ea209] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Sign In
          </button>
          <button className="bg-[#59C6D2] hover:bg-[#43aeb9] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;