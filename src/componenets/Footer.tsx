import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
        return (
          <div className="w-full h-[60vh] overflow-clip bg-[#fafafa] flex flex-col justify-center items-center">
            <div className="w-full md:w-4/5 h-1/4 flex justify-between items-center ">
              <h2 className="font-bold text-2xl">Bandage</h2>
              <div className="flex text-secondary-blue gap-6">
                <FaFacebook className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
                <FaTwitter className="w-6 h-6" />
              </div>
            </div>

            <div className="h-1/2 w-full bg-white flex justify-center items-center py-10">
              <div className="w-4/5 h-full flex flex-col justify-between md:flex-row gap-4">
                <div className="flex flex-col gap-5">
                  <p className="text-base font-bold text-primary-text">
                    Company Info
                  </p>
                  <ul className="text-sm text-tertiary-text flex flex-col gap-[10px]">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Carrier</a>
                    </li>
                    <li>
                      <a href="#">We are hiring</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-base font-bold text-primary-text">Legal</p>
                  <ul className="text-sm text-tertiary-text flex flex-col gap-[10px]">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Carrier</a>
                    </li>
                    <li>
                      <a href="#">We are hiring</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-base font-bold text-primary-text">
                    Features
                  </p>
                  <ul className="text-sm text-tertiary-text flex flex-col gap-[10px]">
                    <li>
                      <a href="#">Business Marketing</a>
                    </li>
                    <li>
                      <a href="#">User Analytic</a>
                    </li>
                    <li>
                      <a href="#">Live Chat</a>
                    </li>
                    <li>
                      <a href="#">Unlimited Support</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-base font-bold text-primary-text">
                    Resources
                  </p>
                  <ul className="text-sm text-tertiary-text flex flex-col gap-[10px]">
                    <li>
                      <a href="#">IOS & Android</a>
                    </li>
                    <li>
                      <a href="#">Watch a Demo</a>
                    </li>
                    <li>
                      <a href="#">Customers</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-base font-bold text-primary-text">
                    Get In Touch
                  </p>
                  <div className="flex flex-col gap-3 ">
                    <div className="flex h-14 bg-[#f9f9f9] rounded-md border border-[#e6e6e6]">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="w-full  bg-transparent outline-none px-4 placeholder:text-sm"
                      />
                      <button className="w-max text-sm px-8 py-4 text-white bg-secondary-blue">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-tertiary-text">
                    Lore imp sum dolor Amit
                  </p>
                </div>
              </div>
            </div>

            <div className="h-1/4 w-full flex items-center justify-center">
              <p className="text-sm font-bold text-[#737373] w-4/5">
                Made With Love By Victory All Right Reserved
              </p>
            </div>
          </div>
        );
};

export default Footer;
