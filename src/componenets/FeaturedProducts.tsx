import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { IoTrendingUpOutline } from "react-icons/io5";
const FeaturedProducts = () => {
  return (
    <div className="mt-20 min-h-screen w-full flex justify-center">
      <div className="w-4/5 h-4/5 flex flex-col justify-center items-center gap-10 md:gap-20">
        {/* Head text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl text-tertiary-text">Featured Products</p>
          <h2 className="text-[1.5rem] text-primary-text font-bold uppercase">
            the best services
          </h2>
          <p className="text-sm text-tertiary-text text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {/* content */}
        <div className="mt-4 md:mt-8 w-full flex flex-col md:flex-row gap-8 md:gap-0 justify-around">
          <div className="flex justify-center items-center flex-col gap-5 w-full md:w-1/4 text-center">
            <FaBookReader className="text-7xl text-secondary-blue" />
            <h2 className="text-2xl text-primary-text font-bold">Easy Wins</h2>
            <p className="text-sm text-tertiary-text tracking-wide">
              Get your best looking smile now!
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-5 w-full md:w-1/4 text-center">
            <SlBookOpen className="text-7xl text-secondary-blue" />
            <h2 className="text-2xl text-primary-text font-bold">Concrete</h2>
            <p className="text-sm text-tertiary-text tracking-wide">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-5 w-full md:w-1/4 text-center">
            <IoTrendingUpOutline className="text-7xl text-secondary-blue" />
            <h2 className="text-2xl text-primary-text font-bold">Hack Growth</h2>
            <p className="text-sm text-tertiary-text tracking-wide">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts