'use client'
import React, {useState} from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="flex justify-between relative items-center py-6 md:py-4 px-7 text-[#252b42]">
      <div className="flex gap-32">
        <h2 className="font-bold text-2xl">Bandage</h2>
        <div
          className={` md:flex flex-col md:flex-row gap-4 items-center text-sm font-medium ${
            showMenu
              ? "hidden"
              : "bg-white absolute top-20 left-0 w-full p-12 flex flex-col gap-8"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/shop" className="flex items-center gap-2">
            Shop <IoIosArrowDown className="w-4 h-4" />
          </Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pages">Pages</Link>
        </div>
      </div>
      <div className="flex gap-4 items-center text-primary-text md:text-[#23A6F0] text-sm font-medium cursor-pointer">
        <div className="hidden md:flex items-center gap-1">
          <HiOutlineUser className="w-4 h-4" />
          <span className="hidden md:block text-sm font-semibold">
            Login / Register{" "}
          </span>
        </div>
        <div className="">
          <IoIosSearch className="w-6 md:w-4 h-6 md:h-4" />
        </div>
        <div className="flex">
          <IoCartOutline className="w-6 md:w-4 h-6 md:h-4" />
          <span className="text-sm">1</span>
        </div>
        <div className="hidden md:flex">
          <IoHeartOutline className="w-4 h-4" />
          <span className="text-sm">1</span>
        </div>
        <div
          className="md:hidden flex cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiOutlineMenuAlt3 className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
