import React from 'react'


import { OnePostRightBar } from 'components/OnePostRightBar'
import { Container } from 'components/Container'
function Post() {
  return (
    <div>
      <Navbar />
      <Container>
        <OnePostRightBar />
      </Container>
    </div>
  )
}

export default Post
