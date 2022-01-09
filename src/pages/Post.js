import React from 'react'

import { OnePostRightBar } from 'components/OnePostRightBar'
import { Container } from 'components/Container'
import { Columns } from 'components/Columns'
import { CommentSection } from 'components/CommentSection'
import { ReadNext } from 'components/ReadNext'
import { MongoBanner } from 'components/MongoBanner'
import { MainCard } from 'components/MainCard'
import { MongoStories } from 'components/MongoStories'
function Post() {
  return (
    <div className="container flex mx-auto mt-8 bg-slate-100">
      <Columns>
        <OnePostRightBar />
      </Columns>
      <Columns>
        <MainCard />
        <CommentSection />
        <ReadNext />
      </Columns>
      <Columns>
        <MongoStories />
      </Columns>
    </div>
  )
}

export default Post
