import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Now from './components/Now'
import SingleProject from './components/SingleProject';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio test='test'/>
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Now">
            <Now />
          </Route>
        </Switch>

        {/* Include all routes to individual component pages
        <Route path='/' exact component={About} />
        <Route path='/About' component={About} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Now' component={Now} />

        {/* Include all routes to individual project pages in Portfolio component */}
        {/* <Route path='/onefigrapp' component={SingleProject} />
        <Route path='/ecovaluator' component={SingleProject} />
        <Route path='/geopointe' component={SingleProject} />
        <Route path='/lightCville' component={SingleProject} />
        <Route path='/isitdry' component={SingleProject} />
        <Route path='/npsfinder' component={SingleProject} />
        <Route path='mytest' exact render={(props) => <h1>Hello world</h1>} /> */} */}

        <Footer />
      </div>
    </Router>

  );
}

export default App;
