import { useAppSelector } from './app/hooks'

import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Footer from './components/Footer';
import Overlay from './components/Overlay';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import PostDetails from './pages/PostDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import './App.css';

function App() {
  const cart = useAppSelector((state) => state.cart)
  const {overlay} = cart

  return (
    <div className="App">
      <Nav/>
        {overlay ? <Overlay/> : null}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/categories/:category' element={<Category/>}/>
          <Route path='/shop/product/:productId' element={<ProductDetails/>}/>
          <Route path='/blog/post/:postId' element={<PostDetails/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
