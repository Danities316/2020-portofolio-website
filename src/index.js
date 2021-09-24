import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Portfolio from './components/portfolio/Portfolio';
import Intro from './components/intro/Intro';
import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar';
import ContactForms from './components/forms/ContactForms';
import Testimonials from './components/testimonials/Testimonials';
import Testimony from "./components/Testimony";
import Menu from './components/menu/Menu';
import Burger from './components/menu/burger/burger';
import Cards from './components/cards/Cards';
import './styles/index.css';

import reportWebVitals from './reportWebVitals';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
  <div>
       {/* <Menu open={ open}  setOpen={ setOpen }/>
      <Burger open={ open}  setOpen={ setOpen } /> */}
    
  </div>
    </>
  );
}


ReactDOM.render(
  <Router>
       {/* <App /> */}
      <Navbar /> 
    < MobileNavbar />
    <Switch>
    <Route component = {Intro} path="/" exact />
    </Switch>
   
    
  
    <Switch>
    <Route component = {Portfolio} path="/Portfolio" exact />
    <Route component = {Testimonials} path="/Testimonials" exact />
    <Route component = {ContactForms} path="/ContactForms" exact />
    <Route component = {Testimony} path="/Testimony" exact />
    </Switch>
    
    <ContactForms /> 
    <Cards />
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
