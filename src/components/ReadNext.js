import React from "react";

//css styles
const container = "bg-gray-100 w-3/4 flex flex-col p-10 rounded-lg";
const readnextittle = "mb-5";
const card = "flex mb-6";
const titleContainer = " w-[645px] h-[30px]  col-span-11 ml-5";
const cardTitle = "text-xl font-bold text";

export const ReadNext = () => {
  return (
    <div className={container}>
      <div className={readnextittle}>
        <h2 className="font-bold text-3xl"> Read next</h2>
      </div>
      <div className={card}>
        <div className="w-[60px] h-[60px]  rounded-full col-span-1 bg-cover  bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--94B0V9yG--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/98444/cda642ef-7f1e-4218-99ec-3bf400943945.png')]"></div>
        <div className={titleContainer}>
          <h3 className={cardTitle}>
            Serverless boilerplate with TypeScript and Express [Open Source]
          </h3>
          <p>Remi W. - Jan 5</p>
        </div>
      </div>
      <div className={card}>
        <div className="w-[60px] h-[60px]  rounded-full col-span-1 bg-cover bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--rHZl6bn_--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495031/b4f83063-cec4-4834-aebb-df67897d9a2c.png')]"></div>
        <div className=" w-[645px] h-[30px]  col-span-11 ml-5">
          <h3 className="text-xl font-bold text"> New Redux is just</h3>
          <p>Rajesh Joshi - Jan 5</p>
        </div>
      </div>
      <div className={card}>
        <div className="w-[60px] h-[60px]  rounded-full col-span-1 bg-cover bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--O072Qxv5--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/185426/f054690b-160c-491e-8ebc-128b1fa3431d.jpg')]"></div>
        <div className=" w-[645px] h-[30px]  col-span-11 ml-5">
          <h3 className="text-xl font-bold text"> Flask Internals</h3>
          <p>Sm0ke - Jan 5</p>
        </div>
      </div>
      <div className={card}>
        <div className="w-[60px] h-[60px]  rounded-full col-span-1 bg-cover bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--LvegNVTP--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/735823/d1a3991d-0722-4129-abcf-ade7be9e2685.png')]"></div>
        <div className=" w-[645px] h-[30px]  col-span-11 ml-5">
          <h3 className="text-xl font-bold text">
            Angular vs react: Which JS Framework Choose for Your Business?
          </h3>
          <p>Hebert - Dec 30 '21</p>
        </div>
      </div>
    </div>
  );
};
