import "./App.css";

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

import Home from "./components/Home";
import About from "./components/About";


import Navbar from "./components/Navbar";
import LoginSignUp from "./components/LoginSignUp";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="app">
     <Router>
     <Navbar/>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Signin" element={<LoginSignUp/>}/>
      

      </Routes>
     </Router>

     
    </div>
  );
}

export default App;
