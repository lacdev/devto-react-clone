import { Outlet } from 'react-router-dom'

//Components
import { Navbar } from 'components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
