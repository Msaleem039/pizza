
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Protected from './components/Protected';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import ProtectedRout from './components/ProtectedRout';
import { useState } from 'react';
import Todo from './components/Todo';
import Online from './components/Online';

function App() {
const [isloged, setIsloged]= useState();

  return (
    <div className="container">
    <Navbar setIsloged={setIsloged}/>
  <Routes>
 
  <Route  element={<ProtectedRout isloged={isloged}/>}>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
  <Route path='/about'   element={<About/>}></Route>
  <Route path='/todo'element={<Todo/>}></Route>
  <Route path='/online'element={<Online/>}></Route>
  </Route>
<Route path='/login' element={<Register/>}></Route>
<Route path='/product/:id' element={<ProductDetail/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
