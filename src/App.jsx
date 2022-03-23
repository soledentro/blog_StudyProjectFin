import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PostsListProvider from './contexts/PostsListContext';
import PostDetails from './components/PostDetails/PostDetails';

function App() {


  return (
    <BrowserRouter>
      <PostsListProvider>
        <Header />
        <div className="container py-5">
          <hr />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details" element={<PostDetails />} />
            {/* <Route path="/post/:id" element={<PostDetails />} /> */}
          </Routes>
          <Footer />
        </div>
      </PostsListProvider>
    </BrowserRouter>
  )
}

export default App;