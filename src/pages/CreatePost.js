import React from 'react'

import NavBarCreate from 'components/NavBarCreate'
import BottomButtonsCreate from 'components/BottomButtonsCreate'
import CreateInputs from 'components/CreateInputs'
function CreatePost() {
    return (
        <div class="bg-[#efefef]">
            <NavBarCreate />
            <CreateInputs />
            <BottomButtonsCreate />
        </div>
    )
}

export default CreatePost
