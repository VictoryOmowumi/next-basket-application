import React from 'react'
import Image from 'next/image'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const Header = () => {
  return (
    <header className=" h-16 py-4 px-7 header text-white font-bold">
      <div className="flex gap-8">
        <div className="flex gap-2 items-center ">
          <IoCallOutline className="w-4 h-4" />
          <span className="text-sm tracking-wider">(225) 555-0118</span>
        </div>
        <div className="flex gap-2 items-center ">
          <MdOutlineEmail className="w-4 h-4" />
          <span className="text-sm">michelle.rivera@example.com</span>
        </div>
      </div>
      <div className="text-sm">Follow Us and get a chance to win 80% off</div>
      <div className="flex gap-3">
        <span className="text-sm ">Follow Us:</span>
        <FaInstagram className="w-4 h-4" />
        <IoLogoYoutube className="w-4 h-4" />
        <FaFacebook className="w-4 h-4" />
        <FaTwitter className="w-4 h-4" />
      </div>
    </header>
  );
}

export default Header