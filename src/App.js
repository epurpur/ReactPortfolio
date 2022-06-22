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
      info: `The OneFigr App analyzes and visualizes collection use metrics for the <a target="_blank" href='https://www.library.virginia.edu/sustainable-scholarship/'>University of Virgina Libraries</a> organization. This is a python web application built on the
      <a target="_blank" href='https://www.djangoproject.com/'>Django</a> framework. The app analyzes datasets in various ways using the python libraries <a target="_blank" href='https://pandas.pydata.org/'>Pandas</a> and <a target="_blank" href='https://numpy.org/'>NumPy</a> before returning the data to the front-end.
      The user interface allows users to modify their view of the data on the fly and displays it using <a target="_blank" href='https://www.highcharts.com/'>HighCharts</a>, a javascript plotting library.`,
      imgLink: 'onefigrapp',
      deployLink: 'https://onefigrapp.lib.virginia.edu/app/',
      githubLink: 'https://github.com/epurpur/onefigrapp',
    },
    {
      id: 2,
      title: 'EcoValuator Plugin',
      active: true,
      info: `This is a python plugin built for the Open Source GIS software, <a target="_blank" href="https://qgis.org/en/site/">QGIS</a>. EcoValuator was built for <a target="_blank" href="http://www.keylogeconomics.com/">Key-Log Economics</a> to be used as a simple means of analyzing land valuation
      throughout North America. Using the <a target="_blank" href="https://docs.qgis.org/3.16/en/docs/pyqgis_developer_cookbook/index.html">QGIS Python API</a> (PyQGIS), the plugin takes publicly available land use/land cover data, analyzes it, and returns a view of land value. 
      by various parameters in the user's study area. It is <a target="_blank" href="https://plugins.qgis.org/plugins/ecovaluator/">freely available for download</a> by any QGIS user.`,
      imgLink: 'ecovaluator',
      deployLink: 'http://www.keylogeconomics.com/ecovaluator.html',
      githubLink: 'https://github.com/Key-Log-Economics/EcoValuator',
    },
    {
      id: 3,
      title: 'Boone Real Estate',
      active: true,
      info: `Since 2018 I've collaborated with <a target="_blank" href="https://boonerealestate.com/">Boone Real Estate</a> to improve and manage a direct-mail marketing campaign. I set up a <a target="_blank" href="https://www.postgresql.org/">PostgreSQL</a> database and used 
      python scripts as well as PostgreSQL's <a target="_blank" href="https://postgis.net/">PostGIS</a> spatial extension in order to clean the large dataset (~230k records). I later
      integrated this data into the company's <a target="_blank" href=" https://www.salesforce.com/">Salesforce</a> instance and configured <a target="_blank" href="https://www.geopointe.com/">Geopointe</a>, a native Salesforce mapping extension, to visualize the data spatially. 
      This allows for easier integration with the company's direct-mail workfow and management of its internal data.`,
      imgLink: 'geopointe',
      deployLink: 'https://boonerealestate.com/',
      githubLink: '',
    },
    {
      id: 4,
      title: 'Light Cville',
      active: true,
      info: `A streetlight network is a large investment in resources and infrastructure for any city. The City of Charlottesville, Virginia was looking for an improved way for city employees to manage its streetlight utilities. Light Cville is a full-stack <a target="_blank" href="https://nodejs.org/en/"> Node </a> 
      application built on the MVC Framework. It has a <a target="_blank" href="https://www.mysql.com/">MySQL </a> database and <a target="_blank" href="https://sequelize.org/">Sequelize ORM</a>, <a target="_blank" href="https://expressjs.com/"> Express </a> server and restful API, and <a target="_blank" href="https://handlebarsjs.com/">Handlebars </a> templating engine for server side rendering.
      The front-end utilizes the <a target="_blank" href="https://leafletjs.com/">Leaflet</a> mapping library and <a target="_blank" href="http://tabulator.info/">Tabulator</a> to render the data table.`,
      imgLink: 'lightCville',
      deployLink: 'https://lightcville.herokuapp.com/login',
      githubLink: 'https://github.com/epurpur/lightCville',
    },
    {
      id: 5,
      title: 'Is It Dry?',
      active: true,
      info: `Is It Dry? is my original programming passion project. As an avid rock climber, I want to have the best experience possible while I'm out on the rocks.
      This project has evolved over time into a python <a target="_blank" href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a> application that allows users to check the weather conditions at around 500 climbing locations globally 
      using weather data from <a target="_blank" href="https://openweathermap.org/">OpenWeatherMap</a>. The map is implemented with <a target="_blank" href="https://developers.google.com/maps/documentation/javascript/overview"> Google Maps Javascript API</a> and location data is stored in a lightweight
      <a target="_blank" href="https://www.sqlite.org/index.html">SQLite</a> back end.`,
      imgLink: 'isitdry',
      deployLink: 'https://isitdry.herokuapp.com/',
      githubLink: 'https://github.com/epurpur/isitdry'
    },
    {
      id: 6,
      title: 'National Park Finder',
      active: true,
      info: `National Park Service finder is a simple front-end web application built to allow searching of sites administered by the National Park Service. This includes 466 sites including National Parks,
      National Historic Sites, National Monuments, etc. The site uses Google's <a target="_blank" href="https://materializecss.com/">Materialize</a> CSS, <a target="_blank" href="https://leafletjs.com/">Leaflet</a> javascript mapping library, and <a target="_blank" href="https://jqueryui.com/"> jQuery UI</a>
      for some of the UI components. All data is fetched from the <a target="_blank" href="https://www.nps.gov/subjects/developer/api-documentation.htm">National Park Service API</a>`,
      imgLink: 'npsfinder',
      deployLink: 'https://epurpur.github.io/NationalParkService/',
      githubLink: 'https://github.com/epurpur/NationalParkService',
    },
    {
      id: 7,
      title: 'ContraList',
      active: true,
      info: `ContraList is designed to connect construction jobs and labor. Contactors can post upcoming jobs and skilled labor can apply for them. This is a full stack MERN application with a <a target="_blank" href="https://www.mongodb.com/">MongoDB</a> back end, a <a target="_blank" href="https://expressjs.com/">Express</a> web framework, 
      and a <a target="_blank" href="https://reactjs.org/">React</a> front end, and <a target="_blank" href="https://nodejs.org/en/">Node</a> web server. ContraList also uses a <a target="_blank" href="https://nodejs.org/en/">GraphQL</a> API.`,
      imgLink: 'ContraList',
      deployLink: 'https://contralist.herokuapp.com/',
      githubLink: 'https://github.com/epurpur/ContraList'
    },
    {
      id: 8,
      title: 'River Monitor',
      active: true,
      info: `River monitor is a simple <a target="_blank" href="https://reactjs.org/">React</a> front end application. This is a hobby project which allows me and other local climbers to check the river levels and conditions, which affect access to our local climbing areas.
      When the water is too high, we can't get to the cliffs! The data comes from the <a target="_blank" href="https://waterservices.usgs.gov/rest/">USGS Water Services API</a>.`,
      imgLink: 'RiverMonitor',
      deployLink: 'https://river-monitor.herokuapp.com/',
      githubLink: 'https://github.com/epurpur/river_monitor'
    }
  ])

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          {/* Create route for each page in application */}
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

          {/* Map over items in projects state and make route for each one 
              These will be rendered by clicking on a project card in the Portfolio component*/}
          {projects.map((project) => (
            <Route exact path={`/${project.imgLink}`}>
              <SingleProject
                title={project.title} 
                info={project.info}
                imgLink={project.imgLink}
                deployLink={project.deployLink}
                githubLink={project.githubLink}
            />
            </Route>
          ))}         
        </Switch>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
