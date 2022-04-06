import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PostDetails from './components/Main/PostsList/PostDetails/PostDetails';
import Form from './components/Main/Form/Form';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="addpost" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;