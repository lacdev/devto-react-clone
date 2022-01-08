import React from 'react'

import { Navbar } from 'components/Navbar'
import { Container } from 'components/Container'
import { IconList } from 'components/IconList'
import { OtherList } from 'components/OtherList'
import { SocialMediaIcons } from 'components/SocialMediaIcons'
import { Footer } from 'components/Footer'
import { MongoBanner } from 'components/MongoBanner'
import { Main } from 'components/Main'
import { MongoStories } from 'components/MongoStories'
import { LeftBarAdvertising } from 'components/LeftBarAdvertising'
import { CommentSection } from 'components/CommentSection'
function Home() {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <Container>
        <MongoBanner />
        <Main>
          <IconList />
          <OtherList />
          <SocialMediaIcons />
          <MongoStories />
          <LeftBarAdvertising />
          <CommentSection />
        </Main>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
