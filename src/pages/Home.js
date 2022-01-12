import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'components/Container'
import { IconList } from 'components/IconList'
import { OtherList } from 'components/OtherList'
import { SocialMediaIcons } from 'components/SocialMediaIcons'
import { MongoBanner } from 'components/MongoBanner'
import { Main } from 'components/Main'
import { MongoStories } from 'components/MongoStories'
import { LeftBarAdvertising } from 'components/LeftBarAdvertising'
import { Columns } from 'components/Columns'
import { CodeNewbie } from 'components/CodeNewbie'
import StickerPack from 'components/StickerPack'
import Listings from 'components/Listings'
import { CardsContainer } from 'components/CardsContainer'

function Home() {
  return (
    <div className="bg-slate-100">
      <Container>
        <MongoBanner />
        <Main>
          <Columns minWidth="w-1/4 hidden md:block">
            <IconList />
            <OtherList />
            <SocialMediaIcons />
            <StickerPack />
            <LeftBarAdvertising />
          </Columns>
          <Columns minWidth="md:w-2/4 w-full md:w-3/4">
            <CardsContainer />
          </Columns>
          <Columns minWidth="w-1/4 hidden lg:block">
            <CodeNewbie />
            <MongoStories />
            <Listings />
          </Columns>
        </Main>
      </Container>
      <Outlet />
    </div>
  )
}

export default Home
