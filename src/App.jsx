import { useState } from "react";
import Navbar from './components/Navbar'
import "./App.css";
import Banner from "./components/Banner";
import CartSection from "./components/CartSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Banner/>
      <CartSection/>
      <Footer/>
    </>
  );
}

export default App;
