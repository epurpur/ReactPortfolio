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

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'OneFigr App',
      active: true,
      info: `The OneFigr App analyzes and visualizes collection use metrics for the <a href='https://www.library.virginia.edu/sustainable-scholarship/'>University of Virgina Libraries</a> organization. This is a python web application built on the
      <a href='https://www.djangoproject.com/'>Django</a> framework. The app analyzes datasets in various ways using the python libraries <a href='https://pandas.pydata.org/'>Pandas</a> and <a href='https://numpy.org/'>NumPy</a> before returning the data to the front-end.
      The user interface allows users to modify their view of the data on the fly and displays it using <a href='https://www.highcharts.com/'>HighCharts</a>, a javascript plotting library.`,
      imgLink: 'onefigrapp',
      deployLink: 'https://onefigrapp.lib.virginia.edu/app/',
    },
    {
      id: 2,
      title: 'EcoValuator Plugin',
      active: true,
      info: `This is a python plugin built for the Open Source GIS software, <a href="https://qgis.org/en/site/">QGIS</a>. EcoValuator was built for <a href="http://www.keylogeconomics.com/">Key-Log Economics</a> to be used as a simple means of analyzing land valuation
      throughout North America. Using the <a href="https://docs.qgis.org/3.16/en/docs/pyqgis_developer_cookbook/index.html">QGIS Python API</a> (PyQGIS), the plugin takes publicly available land use/land cover data, analyzes it, and returns a view of land value. 
      by various parameters in the user's study area. It is <a href="https://plugins.qgis.org/plugins/ecovaluator/">freely available for download</a> by any QGIS user.`,
      imgLink: 'ecovaluator',
      deployLink: 'http://www.keylogeconomics.com/ecovaluator.html',
    },
    {
      id: 3,
      title: 'Boone Real Estate',
      active: true,
      id: `Since 2018 I've collaborated with <a href="https://boonerealestate.com/">Boone Real Estate</a> to improve and manage a direct-mail marketing campaign. I set up a <a href="https://www.postgresql.org/">PostgreSQL</a> database and used 
      python scripts as well as PostgreSQL's <a href="https://postgis.net/">PostGIS</a> spatial extension in order to clean the large dataset (~230k records). I later
      integrated this data into the company's <a href=" https://www.salesforce.com/">Salesforce</a> instance and configured <a href="https://www.geopointe.com/">Geopointe</a>, a native Salesforce mapping extension, to visualize the data spatially. 
      This allows for easier integration with the company's direct-mail workfow and management of its internal data.`,
      imgLink: 'geopointe',
      deployLink: 'https://boonerealestate.com/',
    },
    {
      id: 4,
      title: 'Light Cville',
      active: true,
      info: `A streetlight network is a large investment in resources and infrastructure for any city. The City of Charlottesville, Virginia was looking for an improved way for city employees to manage its streetlight utilities. Light Cville is a full-stack <a href="https://nodejs.org/en/"> Node </a> 
      application built on the MVC Framework. It has a <a href="https://www.mysql.com/">MySQL </a> database and <a href="https://sequelize.org/">Sequelize ORM</a>, <a href="https://expressjs.com/"> Express </a> server and restful API, and <a href="https://handlebarsjs.com/">Handlebars </a> templating engine for server side rendering.
      The front-end utilizes the <a href="https://leafletjs.com/">Leaflet</a> mapping library and <a href="http://tabulator.info/">Tabulator</a> to render the data table.`,
      imgLink: 'lightCville',
      deployLink: 'https://lightcville.herokuapp.com/login',
    },
    {
      id: 5,
      title: 'Is It Dry?',
      active: true,
      info: `Is It Dry? is my original programming passion project. As an avid rock climber, I want to have the best experience possible while I'm out on the rocks.
      This project has evolved over time into a python <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a> application that allows users to check the weather conditions at around 500 climbing locations globally 
      using weather data from <a href="https://openweathermap.org/">OpenWeatherMap</a>. The map is implemented with <a href="https://developers.google.com/maps/documentation/javascript/overview"> Google Maps Javascript API</a> and location data is stored in a lightweight
      <a href="https://www.sqlite.org/index.html">SQLite</a> back end.`,
      imgLink: 'isitdry',
      deployLink: 'https://isitdry.herokuapp.com/',
    },
    {
      id: 6,
      title: 'National Park Finder',
      active: true,
      info: `National Park Service finder is a simple front-end web application built to allow searching of sites administered by the National Park Service. This includes 466 sites including National Parks,
      National Historic Sites, National Monuments, etc. The site uses Google's <a href="https://materializecss.com/">Materialize</a> CSS, <a href="https://leafletjs.com/">Leaflet</a> javascript mapping library, and <a href="https://jqueryui.com/"> jQuery UI</a>
      for some of the UI components. All data is fetched from the <a href="https://www.nps.gov/subjects/developer/api-documentation.htm">National Park Service API</a>`,
      imgLink: 'npsfinder',
      deployLink: 'https://epurpur.github.io/NationalParkService/',
    }
  ])

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
            <Portfolio projects={projects}/>
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Now">
            <Now />
          </Route> 

          {/* Map over items in projects state and make route for each one */}
          {projects.map((project) => (
            <Route exact path={`/${project.imgLink}`}>
              <SingleProject
                title={project.title} 
                info={project.info}
                imgLink={project.imgLink}
                deployLink={project.deployLink}
            />
            </Route>
          ))}         
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
        <Route path='mytest' exact render={(props) => <h1>Hello world</h1>} /> */}

        <Footer />
      </div>
    </Router>

  );
}

export default App;
