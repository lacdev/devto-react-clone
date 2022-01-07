import React from 'react'

import { Navbar } from 'components/Navbar'
import { OnePostRightBar } from 'components/OnePostRightBar'
import {Footer} from 'components/Footer'
function Post() {
    return (
        <div>
            <Navbar/>
            <OnePostRightBar/>
            <Footer/>
        </div>
    )
}

export default Post
