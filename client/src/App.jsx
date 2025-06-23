import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './content/home.jsx';
import Intro from './content/IntroPage.jsx';
import ProductCategory from './content/ProductCat.jsx';
import AboutUs from './content/AboutUs.jsx';
import ContactUs from './content/ContactUs.jsx';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
      <Intro />
        <Home />
        <ProductCategory />
        <AboutUs />
        <ContactUs />
      <Footer />
    </>
  );
}

export default App;
