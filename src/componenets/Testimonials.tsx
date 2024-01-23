import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
const Testimonials = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-4/5 h-4/5 flex flex-col md:flex-row gap-4 justify-center items-center mt-4 md:mt-16 ">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h2 className="text-[1.5rem] text-primary-text font-bold">
            What they say about us
          </h2>
          <div className="flex flex-col gap-5 items-center justify-center w-full">
            {/* Avatar */}
            <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full">
              <img
                src="../images/user.jpg"
                alt=""
                className="w-full h-full rounded-full object-contain"
              />
            </div>
            {/* stars */}
            <div className="flex gap-2">
              <BsStarFill className="text-[#F3CD03] w-5 h-5" />
              <BsStarFill className="text-[#F3CD03] w-5 h-5" />
              <BsStarFill className="text-[#F3CD03] w-5 h-5" />
              <BsStarFill className="text-[#F3CD03] w-5 h-5" />
              <BsStar className="text-[#F3CD03] w-5 h-5" />
            </div>
            {/* comment */}
            <p className="w-3/5 text-center text-sm text-tertiary-text font-bold">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            {/* name */}
            <p className="flex flex-col gap-1 justify-center items-center text-center text-sm text-secondary-blue font-bold">
              Regina Miles
              <span className="text-sm text-primary-text font-bold">
                Designer
              </span>
            </p>
          </div>
        </div>
        <div className="flex-1 boxes ">
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-1.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-2.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-3.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-4.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-5.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-6.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-7.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-8.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
            <div className=" bg-[#c4c4c4]">
                <img src="../images/test-9.png" alt="testimonial" className="w-full h-full object-fill" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
