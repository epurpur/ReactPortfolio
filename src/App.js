import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'OneFigr App',
      active: true,
    },
    {
      id: 2,
      title: 'EcoValuator Plugin',
      active: true,
    },
    {
      id: 3,
      title: 'Boone Real Estate',
      active: true,
    },
    {
      id: 4,
      title: 'Light Cville',
      active: true,
    },
    {
      id: 5,
      title: 'Is It Dry?',
      active: true,
    },
    {
      id: 6,
      title: 'National Park Finder',
      active: true,
    },
    {
      id: 7,
      title: 'Virginia River Monitor',
      active: false
    }
  ])


  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
