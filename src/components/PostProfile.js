import React from 'react'

function PostProfile() {
    return (
        <div class="text-[#3d3d3d] bg-[#f9f9f9] border-t-[32px] border-[#323ebe] p-4">
        <div class="flex w-full justify-center absolute top-4">
          <img class="rounded-full w-12" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ea1OGrCb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png"/>
          <a class="font-bold hover:text-[#323ebe] pl-2 pt-6">Ben Halpern</a>
        </div>
        <div class=" flex w-5/6 m-3 justify-center mt-8">
          <button class="w-full px-1 py-0.5 bg-[#323ebe] text-white font-bold">Follow</button>
        </div>
        <div class="m-4">
          <span>A Canadian software developer who thinks he’s funny. He/Him.</span>
        </div>
        <div class="m-4">
          <div>
            <span class="text-[10px] font-semibold">LOCATION</span></br>
            <p class="text-xs">NY</p>
          </div>
          <div>
            <span class="text-[10px] font-semibold">EDUCATION</span></br>
            <p class="text-xs">Mount Allison University</p>
          </div>
          <div>
            <span class="text-[10px] font-semibold">WORK</span></br>
            <p class="text-xs">Founder and Co-CEO at Forem</p>
          </div>
          <div>
            <span class="text-[10px] font-semibold">JOINED</span></br>
            <p class="text-xs">Dec 26, 2015</p>
          </div>
        </div>
      </div>
    )
}

export default PostProfile
