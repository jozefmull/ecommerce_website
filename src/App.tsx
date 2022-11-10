
import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Container from './components/Container';
import Footer from './components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      {/* <Container> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/categories/:category' element={<Category/>}/>
          <Route path='/shop/product/:productId' element={<ProductDetails/>}/>
        </Routes>
      {/* </Container> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
