import React from 'react'

function MoreProfile() {
    return (
    <div>
        <div class="bg-[#f9f9f9] text-[#3d3d3d] w-60 rounded">
            <div class="flex py-2 px-4 rounded">
                <h2 class="font-bold pr-2">More from</h2>
                <h2 class="text-[#3b49df] text-right font-bold">Ben Halpern</h2>
            </div>
        </div>
        <div class="p-3 text-sm border-2 hover:bg-white hover:text-[#323ebe]">
            <a href= "#"class="">How do you feel about regex?</a> <br/>
            <a href="#" class="text-xs">#regex</a>
            <a href="#" class="text-xs">#discuss</a>
        </div>
        <div class="p-3 text-sm border-2 hover:bg-white hover:text-[#323ebe]">
            <a href= "#"class="">What are your code smells and/or best practices with regular expressions?</a> <br/>
            <a href="#" class="text-xs">#regex</a>
            <a href="#" class="text-xs">#discuss</a>
        </div>
    </div>
    )
}

export default MoreProfile
