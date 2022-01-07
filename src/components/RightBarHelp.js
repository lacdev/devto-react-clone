import React from "react";

//CSS properties
const container1 = " border  w-[270px] h-[55px] font-bold text-2xl rounded-t-md";
const container2 = " border  w-[270px] h-[81px] rounded-b-md  ";

export const RightbarHelp = () => {
  return (
    <>
      <div className={container1}>
        <h3 className="mx-3 mt-2 hover:text-blue-700">#help</h3>
      </div>
      <div className={container2}>
        <p className="mt-3 mx-3 hover:text-blue-700">Lack of Motivation</p>
        <p className="text-slate-400  mx-3  hover:bg-[#fffff]">
          1 comment
        </p>
      </div>
    </>
  );
};
