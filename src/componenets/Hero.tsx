import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen md:h-screen w-full flex justify-center">
      <div className="w-4/5 md:h-4/5 mt-4 flex flex-col md:flex-row gap-4 font-bold">
        <div
          className="w-full md:w-2/5 h-[300px] md:h-full flex flex-col gap-[5px] p-6"
          style={{
            backgroundImage: `url('../images/hero-img-1.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
          }}
        >
          <p className="text-sm text-secondary-text">5 Items</p>
          <h2 className="text-[1.5rem] md:text-[2.5rem] text-primary-text font-bold uppercase">
            Furniture
          </h2>
          <p className="text-sm text-primary-text font-bold">Read More</p>
        </div>
        <div className="w-full md:w-3/5 h-full flex flex-col gap-4">
          <div
            className="w-full h-[300px] md:h-1/2 flex flex-col gap-[5px] p-6"
            style={{
              backgroundImage: `url('../images/card-cover-6.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center center",
            }}
          >
            <p className="text-sm text-secondary-text">5 Items</p>
            <h2 className="uppercase text-[1.5rem] text-primary-text font-bold">
              Furniture
            </h2>
            <p className="text-sm text-primary-text font-bold">Read More</p>
          </div>
          <div className="w-full h-1/2 flex flex-col md:flex-row gap-4">
            <div
              className="w-full h-[300px] md:h-full md:w-1/2 bg-white flex flex-col gap-[5px] p-6"
              style={{
                backgroundImage: `url('../images/card-cover-7.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
              }}
            >
              <p className="text-sm text-secondary-text">5 Items</p>
              <h2 className="uppercase text-[1.5rem] text-primary-text font-bold">
                Furniture
              </h2>
              <p className="text-sm text-primary-text font-bold">Read More</p>
            </div>
            <div
              className="w-full h-[300px] md:h-full md:w-1/2 bg-white flex flex-col gap-[5px] p-6"
              style={{
                backgroundImage: `url('../images/card-cover-8.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center center",
              }}
            >
              <p className="text-sm text-secondary-text">5 Items</p>
              <h2 className="uppercase text-[1.5rem] text-primary-text font-bold">
                Furniture
              </h2>
              <p className="text-sm text-primary-text font-bold">Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
