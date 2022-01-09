import React from 'react'

import { Container } from 'components/Container'
import { IconList } from 'components/IconList'
import { OtherList } from 'components/OtherList'
import { SocialMediaIcons } from 'components/SocialMediaIcons'
import { MongoBanner } from 'components/MongoBanner'
import { Main } from 'components/Main'
import { MongoStories } from 'components/MongoStories'
import { LeftBarAdvertising } from 'components/LeftBarAdvertising'
import { CommentSection } from 'components/CommentSection'
import { Columns } from 'components/Columns'
import { CodeNewbie } from 'components/CodeNewbie'
import { RightbarHelp } from 'components/RightBarHelp'

function Home() {
  return (
    <div className="bg-slate-100">
      <Container>
        <MongoBanner />
        <Main>
          <Columns>
            <IconList />
            <OtherList />
            <SocialMediaIcons />
            <LeftBarAdvertising />
          </Columns>
          <Columns>
            <CommentSection />
          </Columns>
          <Columns>
            <CodeNewbie />
            <MongoStories />
            <RightbarHelp />
          </Columns>
        </Main>
      </Container>
    </div>
  )
}

export default Home
