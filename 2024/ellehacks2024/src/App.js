import React from 'react';

import { HashRouter as Router } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import JoinUS from './components/JoinUS';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home id="home" />
        <AboutUs id="aboutus" />
        <JoinUS id="joinus" />
        <FAQ id="faq" />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
