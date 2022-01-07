import React from 'react'

import { Navbar } from 'components/Navbar'
import { Header } from 'components/Header'
import { SubHeader } from 'components/Subheader'
import { SubSubHeader } from 'components/Subsubheader'
import { Button } from 'components/Button'
import { Title } from 'components/Title'
import { Container } from 'components/Container'
import { IconList } from 'components/IconList'
import { OtherList } from 'components/OtherList'
import { SocialMediaIcons } from 'components/SocialMediaIcons'
import {Footer} from 'components/Footer'
function Home() {
    return (
        <div className='bg-neutral-700'>
            <Navbar/>
            <Container>
                <Header>Hola estas en Home</Header>
                <SubHeader>Aqui debe ir los posts</SubHeader>
                <SubSubHeader>Esto es un ejemplo</SubSubHeader>
                <Title>DevTo Clone Reto React</Title>
                <Button>Pushame XD</Button>
                <IconList/>
                <OtherList/>
                <SocialMediaIcons/>
            </Container>
          <Footer/>
        </div>
    )
}

export default Home
