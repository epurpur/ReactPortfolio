import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Now from './components/Now'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Include all routes to individual pages */}
        <Route path='/' exact component={About} />
        <Route path='/About' component={About} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Now' component={Now} />

        <Footer />
      </div>
    </Router>

  );
}

export default App;
