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
import { OnePostRightBar } from 'components/OnePostRightBar'
import { Navbar } from 'components/Navbar'


const App = () => {
  return (
    <div className="bg-black">
       <Navbar/>
       <OnePostRightBar/>
      <Container>
      <Header>This is our Dev.to Clone </Header>
      <SubHeader> Less Cool Text </SubHeader>
      <SubSubHeader> Kind of boring text </SubSubHeader>
      <Title> Hello World </Title>
      <Button> I'm a cool button </Button>
     
      <IconList/>
      <OtherList/>
      <SocialMediaIcons/>
     
      </Container>
      <Footer/>
    </div>
  )
}

export default App
