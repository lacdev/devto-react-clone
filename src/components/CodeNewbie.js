import React from "react";

//css styles
const container = "border w-[271px] h-[304px] bg-[#ffffff] rounded-md";
const banner =
  " w-[239px] mx-auto my-[16px] h-[120px] bg-cover bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--9vVmp1An--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x2ub0oz6n38corcwxqg8.png')]";
const tittle = " font-bold text-lg mx-[16px] mb-[18px]";
const meta = "font-bold text-[14px] mx-[16px]";
const paraghrap = "text-blue-700 mx-[16px] mb-[auto]";

export const CodeNewbie = () => {
  return (
    <>
      <div className={container}>
        <div className={banner}></div>
        <h4 className={tittle}>CodeNewbie Challenge 2022</h4>
        <h5 className={meta}>
          |Write More|Start Coding|Code More|Get a Job|Learn in Public|
        </h5>
        <p className={paraghrap}> Join Cohort 1 by Jan 30th</p>
      </div>
    </>
  );
};
