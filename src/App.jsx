import React from "react";
import Menu from "Menu.jsx"
import Header from "./Header.jsx";
import Product from "./Product.jsx";
import Footer from './Footer'
import './App.css';
function App(){
  return(
    <>
    <Header/>
<Menu/>
      
     <div className="container">
      <Product image="O.jpg"  title="product1" detail="test1" price={50}/>
      <Product image="ww.jpg"  title="product2" detail="test2" price={1000}/>
      <Product image="O.jpg"  title="product3" detail="test3" price={60}/>
      
     </div>
     
      
    </>
  )
}
export default App;
