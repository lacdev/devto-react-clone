import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components

//Pages
import NotFoundPage from "pages/NotFoundPage";
import Home from "pages/Home";
import Post from "pages/Post";
import Search from "pages/Search";
import CreatePost from "pages/CreatePost";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/CreatePost" element={<CreatePost />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
