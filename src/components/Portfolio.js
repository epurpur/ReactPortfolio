import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SingleProject from './SingleProject'

const Portfolio = () => {

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

      const returnActiveProjects = () => {
        // gets all projects from project state. Filters out those with property active: true. Creates HTML for those projects to render in front end
  
        // filters out only those projects which have a property of active: true
        const activeProjects = projects.filter((project) => project.active)
        
        /**
         * returns HTML for each active project
         * Uses project.imgLink for the URL to endpoint of SingleProject component
         *     - all routes are defined in App.js component
         *     - 
         * passes project information as prop to be rendered in SingleProject component
         */
        //START HERE. NEED TO PASS PROJECT AS PROP TO SINGLEPROJECT COMPONENT
        // <a href={`/${project.imgLink}`}><img class="img-card-top" id="portfolioCard" src={`/images/${project.imgLink}.png`} alt={`${project.title} application screenshot`}></img></a>

        return activeProjects.map((project) =>
        (<div className="card">
            <img class="image" id="portfolioCard" src={`/images/${project.imgLink}.png`} alt={`${project.title} application screenshot`}></img>
            <a href={`/${project.imgLink}`}>
              <div class="overlay">
                <div class="text">{project.title}</div>
              </div>
            </a>
        </div>
        ))
      } 

    return (
        <div>
            <h1 id="workPortfolioTitle"> Work Portfolio </h1>
            <div id="portfolioCardsHolder">
              {returnActiveProjects()}
            </div>
        </div>
    )
}

export default Portfolio
