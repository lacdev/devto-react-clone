import React from 'react'

import { Navbar } from 'components/Navbar'
import {Footer} from 'components/Footer'
import NavBarCreate from 'components/NavBarCreate'
import BottomButtonsCreate from 'components/BottomButtonsCreate'
function CreatePost() {
    return (
        <div class="bg-[#efefef]">
            <NavBarCreate/>
            <BottomButtonsCreate/>
        </div>
    )
}

export default CreatePost
