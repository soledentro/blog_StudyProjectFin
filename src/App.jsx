import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PostsListProvider from './contexts/PostsListContext';

function App() {


  return (
    <PostsListProvider>
      <div className="container py-5">
        <Header />
        <hr />
        <Main />
        <Footer />
      </div>
    </PostsListProvider>
  )
}

export default App;
