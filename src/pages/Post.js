import React from 'react'

import { Navbar } from 'components/Navbar'
import { OnePostRightBar } from 'components/OnePostRightBar'
import {Footer} from 'components/Footer'
import PostProfile from 'components/PostProfile'
import MoreProfile from 'components/MoreProfile'

function Post() {
    return (
        <div>
            <Navbar/>
            <OnePostRightBar/>
            <div>
                <PostProfile/>
                <MoreProfile/>
            </div>
            <Footer/>
        </div>
    )
}

export default Post
