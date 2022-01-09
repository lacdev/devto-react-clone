import React from 'react'

//CSS properties
const container1 = 'font-bold text-2xl rounded-t-lg mt-4 bg-gray-50'
const container2 = ' border-t rounded-b-lg  mb-4  bg-gray-50 p-2'

export const RightbarHelp = () => {
  return (
    <>
      <div className={container1}>
        <h3 className="mx-2  hover:text-blue-700 p-2 cursor-default">#help</h3>
      </div>
      <div className={container2}>
        <p className=" mx-2 hover:text-blue-700 cursor-pointer">
          Lack of Motivation
        </p>
        <p className="text-slate-400  mx-2  hover:bg-[#fffff] ">1 comment</p>
      </div>
    </>
  )
}
