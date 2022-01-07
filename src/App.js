import{BrowserRouter, Route, Routes} from 'react-router-dom';

//Components



//Pages
import NotFoundPage from 'pages/NotFoundPage'
import Home from 'pages/Home'
import Post from 'pages/Post';
import Search from 'pages/Search';
import CreatePost from 'pages/CreatePost';


const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="*" element={<NotFoundPage/>}></Route>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/Post" element={<Post/>}></Route>
    <Route path="/Search" element={<Search/>}></Route>
    <Route path="/CreatePost" element={<CreatePost/>}></Route>
    
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
