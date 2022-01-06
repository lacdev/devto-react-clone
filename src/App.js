import { Header } from 'components/Header'
import { SubHeader } from 'components/Subheader'
import { SubSubHeader } from 'components/Subsubheader'
import { Button } from 'components/Button'
import { Title } from 'components/Title'
import { Container } from 'components/Container'
import { IconList } from 'components/IconList'
import { OtherList } from 'components/OtherList'


const App = () => {
  return (
    <div className="bg-black">
      <Container>
      <Header>This is our Dev.to Clone</Header>
      <SubHeader>Less Cool Text</SubHeader>
      <SubSubHeader>Kind of boring text</SubSubHeader>
      <Title>Hello World</Title>
      <Button>
      I'm a cool button</Button>
      <IconList/>
      <OtherList/>
      </Container>
      
    </div>
  )
}

export default App
