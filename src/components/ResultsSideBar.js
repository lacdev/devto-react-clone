import React from "react";

//css styles
const searchtext = "text-3xl mt-[80px] mx-10";
const container = "mx-10 m-2 w-[20%] h-[auto] ";
const list =
  "hover:bg-[#ffffffec] rounded-md w-auto h-10 p-2 hover:text-blue-800 hover:text-base cursor-pointer";

export const ResultsSideBar = () => {
  return (
    <>
      <h1 className={searchtext}>Search results </h1>
      <div className={container}>
        <ul>
          <li className={list}>Posts</li>
          <li className={list}>Podcasts</li>
          <li className={list}>People</li>
          <li className={list}>Coments</li>
          <li className={list}>My posts only</li>
        </ul>
      </div>
    </>
  );
};
