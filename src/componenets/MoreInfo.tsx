import Link from "next/link";
import React from "react";

const MoreInfo = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-col items-center gap-4">
      {/*  tabs container */}
      <div className="py-8 ">
        <ul className="flex w-full items-center  gap-6">
          <li className="text-sm text-primary-text font-semibold">
            Description
          </li>
          <li className="text-sm text-primary-text font-semibold">
            Additional Information
          </li>
          <li className="text-sm text-primary-text font-semibold">
            Reviews
            <span className="text-sm text-primary-green font-bold"> (1)</span>
          </li>
        </ul>
      </div>
      {/*  tabs content */}
      <div className="flex w-full h-full gap-8">
        <div className="flex flex-col gap-6 items-start ">
          <h2 className="font-bold text-2xl text-primary-text">
            The quick fox jumps over
          </h2>
          <p className="text-sm text-primary-text">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className="flex gap-6 h-15">
            <div className="h-full w-2 bg-primary-green"></div>
            <p className="text-sm text-primary-text">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <p className="text-sm text-primary-text">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="w-full ">
          <img src="../images/desc-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
