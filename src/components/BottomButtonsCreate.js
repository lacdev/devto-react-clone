import React from 'react'
import { Link } from 'react-router-dom'

function BottomButtonsCreate({onPublishClick}) {
    return (
        <div class="inline-flex ml-96 my-4">
            <div onClick={onPublishClick} type="submit" class="bg-[#3b49df] text-[#f9f9f9] px-4 py-2 rounded-lg hover:bg-[#323ebe] font-bold m-1">
                <Link to="/"><button>Publish</button></Link>
            </div>
            <div class="bg-[#d6d6d7] text-[#3d3d3d] px-4 py-2 rounded-lg hover:bg-[#bdbdbd] hover:text-[#090909] font-bold m-1">
                <button>Save Draft</button>
            </div>
            <div class="px-4 py-2 rounded-lg m-1 hover:bg-[#d6d6d7]">
                <svg class="w-6 h-6 "><path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </div>
            <div class="px-4 py-2 rounded-lg m-1">
                <a href="#">Revert new changes</a>
            </div>
        </div>
    )
}

export default BottomButtonsCreate
