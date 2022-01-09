import React from 'react'

function CreateInputs() {
    return (
        <div class="flex justify-center">
            <div class="flex-column w-1/2 rounded-lg border py-8 px-16 bg-white text-[#090909]  ">
                <div>
                    <input class="text-lg"placeholder='Add a cover image URL'></input>
                </div>
                <div>
                    <input class= "text-[48px] font-bold" placeholder='New post title here...'></input>
                </div>
                <div>
                    <select></select>
                </div>
                <div>
                    <input class="text-lg min-h-[620px] min-w-full"placeholder='Write you post content here...'></input>
                </div>
            </div>
        </div>
    )
}

export default CreateInputs
