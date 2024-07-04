"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../app/public/logo.png";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white px-4 py-2 shadow-lg fixed w-full mb-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl">
          <Link href="/">
            <Image src={Logo} className="h-30 w-40" alt="logo" />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li className="text-black hover:text-gray-300 mt-2">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black hover:text-gray-300 mt-2">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="text-black hover:text-gray-300 mt-2">
              <Link href="/users">Users</Link>
            </li>
            <li className="text-black hover:text-gray-300">
              <Link href="/users">
                <Button>Register</Button>
              </Link>
            </li>
            <li className="text-black hover:text-gray-300">
              <Link href="/users">
                <Button variant="outline">Login</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
