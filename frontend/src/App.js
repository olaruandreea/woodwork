import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Careers from "./components/Careers";
import Home from "./components/Home";
import Company from "./components/Company";
import FAQS from "./components/FAQS";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <div className="app-component">
      <Navbar/>
      <Router>
          <Route path="/" component={Home}/>
          <Route path="/careers" component={Careers}/>
          <Route path="/company" component={Company}/>
          <Route path="/faqs" component={FAQS}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contactUs" component={ContactUs}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
