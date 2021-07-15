import React from 'react';
import {Route} from "react-router-dom";
import Home from './home';
import About from './about';
import Contact from './contact';
import './App.css';

const App = () => {
  return (
    <>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </div>
    </>
  );
};

export default App;
