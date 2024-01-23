import React from 'react'
import { LuAlarmClock } from "react-icons/lu";
import { FaChartArea } from "react-icons/fa";
import { TfiAngleRight } from "react-icons/tfi";
const FeaturedPosts = () => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-4/5 h-4/5 flex flex-col items-center gap-20">
        {/* Head text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl text-secondary-blue">Practice Advice</p>
          <h2 className="text-[2.5rem] text-primary-text font-bold">
            Featured Posts
          </h2>
        </div>
        {/* content */}
        <div className="md:flex-row flex-col justify-center flex gap-4">
          <div className="flex flex-col w-[30%] bg-white shadow ">
            <div
              className="w-full h-[300px] bg-white flex flex-col gap-[5px] p-6"
              style={{
                backgroundImage: `url('../images/post-1.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="w-max rounded-[3px] bg-[#e74040] text-white p-1 uppercase text-sm font-bold">
                New
              </div>
            </div>
            <div className="flex flex-col p-[25px] gap-4">
              <div className="flex gap-4">
                <span className="text-sm text-secondary-blue">Google</span>
                <span className="text-sm text-tertiary-text">Trending</span>
                <span className="text-sm text-tertiary-text">New</span>
              </div>
              <h3 className="text-xl text-primary-text">
                Loudest à la Madison #1 (L'integral)
              </h3>
              <p className="text-sm text-tertiary-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <LuAlarmClock className="text-secondary-blue w-5 h-5" />
                  <span className="text-sm text-tertiary-text">
                    22 April 2021
                  </span>
                </div>
                <div className="flex gap-2">
                  <FaChartArea className="text-primary-green w-5 h-5" />
                  <span className="text-sm text-tertiary-text">
                    10 Comments
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-sm text-tertiary-text font-bold">
                  Learn More
                </span>
                <TfiAngleRight className="text-secondary-blue w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[30%] bg-white shadow ">
            <div
              className="w-full h-[300px] bg-white flex flex-col gap-[5px] p-6"
              style={{
                backgroundImage: `url('../images/post-1.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="w-max rounded-[3px] bg-[#e74040] text-white p-1 uppercase text-sm font-bold">
                New
              </div>
            </div>
            <div className="flex flex-col p-[25px] gap-4">
              <div className="flex gap-4">
                <span className="text-sm text-secondary-blue">Google</span>
                <span className="text-sm text-tertiary-text">Trending</span>
                <span className="text-sm text-tertiary-text">New</span>
              </div>
              <h3 className="text-xl text-primary-text">
                Loudest à la Madison #1 (L'integral)
              </h3>
              <p className="text-sm text-tertiary-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <LuAlarmClock className="text-secondary-blue w-5 h-5" />
                  <span className="text-sm text-tertiary-text">
                    22 April 2021
                  </span>
                </div>
                <div className="flex gap-2">
                  <FaChartArea className="text-primary-green w-5 h-5" />
                  <span className="text-sm text-tertiary-text">
                    10 Comments
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-sm text-tertiary-text font-bold">
                  Learn More
                </span>
                <TfiAngleRight className="text-secondary-blue w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[30%] bg-white shadow ">
            <div
              className="w-full h-[300px] bg-white flex flex-col gap-[5px] p-6"
              style={{
                backgroundImage: `url('../images/post-1.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="w-max rounded-[3px] bg-[#e74040] text-white p-1 uppercase text-sm font-bold">
                New
              </div>
            </div>
            <div className="flex flex-col p-[25px] gap-4">
              <div className="flex gap-4">
                <span className="text-sm text-secondary-blue">Google</span>
                <span className="text-sm text-tertiary-text">Trending</span>
                <span className="text-sm text-tertiary-text">New</span>
              </div>
              <h3 className="text-xl text-primary-text">
                Loudest à la Madison #1 (L'integral)
              </h3>
              <p className="text-sm text-tertiary-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <LuAlarmClock className="text-secondary-blue w-5 h-5" />
                  <span className="text-sm text-tertiary-text">
                    22 April 2021
                  </span>
                </div>
                <div className="flex gap-2">
                  <FaChartArea className="text-primary-green w-5 h-5" />
                  <span className="text-sm text-tertiary-text">
                    10 Comments
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-sm text-tertiary-text font-bold">
                  Learn More
                </span>
                <TfiAngleRight className="text-secondary-blue w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts