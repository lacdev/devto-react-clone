import React from 'react'

import { OnePostRightBar } from 'components/OnePostRightBar'
import { Columns } from 'components/Columns'
import { CommentSection } from 'components/CommentSection'
import { ReadNext } from 'components/ReadNext'
import  OnePost  from 'components/OnePost'
import PostProfile from 'components/PostProfile'
import MoreProfile from 'components/MoreProfile'
function Post() {
  return (
    <div className="container flex mx-auto mt-8 bg-slate-100">
      <Columns>
        <OnePostRightBar />
      </Columns>
      <Columns>
        <OnePost />
        <CommentSection />
        <ReadNext />
      </Columns>
      <Columns>
        <PostProfile/>
        <MoreProfile/>
      </Columns>
    </div>
  )
}

export default Post
