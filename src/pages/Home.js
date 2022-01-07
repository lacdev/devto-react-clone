import React from 'react'

import { Navbar } from 'components/Navbar'
import { Container } from 'components/Container'
import { IconList } from 'components/IconList'
import { OtherList } from 'components/OtherList'
import { SocialMediaIcons } from 'components/SocialMediaIcons'
import { Footer } from 'components/Footer'
import { MongoBanner } from 'components/MongoBanner'
import { Main } from 'components/Main'
import { CreatePostButton } from 'components/CreatePostButton'
function Home() {
  return (
    <div className="bg-neutral-700">
      <Navbar />
      <Container>
        <MongoBanner />
        <Main>
          <IconList />
          <OtherList />
          <SocialMediaIcons />
          <CreatePostButton>Create Post</CreatePostButton>
        </Main>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
