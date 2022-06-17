import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {Routes,Route} from "react-router-dom";   
import Product from "./components/Product";          
import About from "./components/About";          
import Contact from "./components/Contact";          

function App() {
  return (
    <>
    
      <Navbar />
      {/* <Home/>  */}
      {/* <Products/>  */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Products" element={<Products/>} />
        <Route exact path="/Product/:id" element={<Product/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />

      </Routes>
    </>
  );
}

export default App;
