import{BrowserRouter, Route, Routes} from 'react-router-dom';

//Components
import { Navbar } from 'components/Navbar'



//Pages
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import Post from 'pages/Post';
import Search from 'pages/Search';
import CreatePost from 'pages/CreatePost';


const App = () => {
  return (
   
      <BrowserRouter>
    <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>} /> 
  <Route path="/CreatePost" element={<CreatePost/>} />
  <Route path="/Search" element={<Search/>} />
  <Route path="/Post" element={<Post/>} /> 
  <Route path="*" element={<NotFoundPage/>} />
  
  </Routes>
     
  </BrowserRouter>
 
    
     
    
   
  )
}

export default App
