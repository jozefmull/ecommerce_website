
import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import PostDetails from './pages/PostDetails';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/categories/:category' element={<Category/>}/>
          <Route path='/shop/product/:productId' element={<ProductDetails/>}/>
          <Route path='/blog/post/:postId' element={<PostDetails/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
