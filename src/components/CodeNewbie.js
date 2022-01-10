import React from 'react'

//css styles
const container = 'flex-col w-96 h-auto rounded-lg flex-col mt-3  bg-white  p-4'
const banner = ' bg-cover rounded-lg mb-3'
const tittle = 'font-bold text-2xl mb-2'
const meta = 'font-bold text-md cursor-pointer'
const paraghrap = 'text-blue-700  m-1'

export const CodeNewbie = () => {
  return (
    <>
      <div className={container}>
        <div className={banner}>
          <img
            className="w-full h-auto rounded-lg"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--9vVmp1An--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x2ub0oz6n38corcwxqg8.png"
            alt="code newbie logo"
          ></img>
        </div>
        <h4 className={tittle}>CodeNewbie Challenge 2022</h4>
        <h5 className={meta}>
          |Write More|Start Coding|Code More|Get a Job|Learn in Public|
        </h5>
        <p className={paraghrap}> Join Cohort 1 by Jan 30th</p>
      </div>
    </>
  )
}
