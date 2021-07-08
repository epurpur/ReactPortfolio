import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact component={About} />
        <Route path='/About' component={About} />
        <Route path='/Portfolio' component={Portfolio} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
