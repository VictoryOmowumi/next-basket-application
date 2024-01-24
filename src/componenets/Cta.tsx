import React from 'react'

const Cta = () => {
  return (
    <div
      className="w-full h-[80vh] flex justify-center items-center"
      style={{
        backgroundImage: `url('../images/cta-image.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="w-full md:w-4/5 h-4/5 flex flex-col justify-center items-center gap-[30px]">
        <h4 className="text-sm text-secondary-blue font-bold">
          Designing Better Experience
        </h4>
        <h2 className="text-[2.5rem] text-primary-text font-bold w-full md:w-1/2 text-center">
          Problems trying to resolve the conflict between
        </h2>
        <p className='text-sm text-[#737373] w-full px-5 md:w-1/3 text-center'>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <h2 className="text-primary-green text-2xl font-bold">$16.48</h2>
        <button className="bg-secondary-blue text-white px-8 py-3 rounded-md hover:bg-primary-green transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cta