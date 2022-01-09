import React from 'react'

import { Navbar } from 'components/Navbar'
import { OnePostRightBar } from 'components/OnePostRightBar'
import { Container } from 'components/Container'
function Post() {
  return (
    <div>
      <Navbar />
      <Container>
        <OnePostRightBar />
          <div>
            <PostProfile/>
            <MoreProfile/>
          </div>
      </Container>
    </div>
  )
}

export default Post
