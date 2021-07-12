import React from 'react'
import '../App.css';

// import overall fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import specific fontAwesome icons
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faSkiing } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Now = () => {
    return (
        <div>
            <section id='nowIntro'>
                <h1 id='nowTitle'> Happening Now </h1>
                <br></br>
                <p> I was inspired to write about what is happening at the moment in my life by <a href="https://sive.rs/">Derek Sivers</a>, who makes a good case for doing it. </p>
                <p>Last Updated: <span>July 12, 2021</span></p>
            </section>
            <section id="nowCategories">
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faQuestion} size='2x'/></th>
                            <td>I have been super busy lately. My girlfriend Sarah finished her Emergency Medicine residency at UVA Health and has moved in with me for the summer. This is a huge accomplishment and I am really proud of her! Besides that I am currently in the last month of a coding bootcamp through the University of Richmond. 
                            The bootcamp has been grueling but I have learned a ton and am overall enjoying it! I am looking forward to graduation day on August 6.</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faSkiing} size='2x'/></th>
                            <td>Sports and leisure activities in general have been on the back burner but just this past weekend I ran the <a href="https://grandfathermtnmarathon.com/">Grandfather Mountain Marathon</a>! I have wanted to run this race for a long time as my family has worked at an aid station for many years and
                            the course passes through my hometown. I was not fast but I did finish in time to run the final lap on the track at the Grandfather Mountain Highland Games! It is hard to think about running again in the near future as my legs are completely wrecked at the moment.</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faDesktop} size='2x'/></th>
                            <td>My latest coding project was <a href="https://lightcville.herokuapp.com/login">Light Cville</a>. This evolved out of an abandoned project from Code for Charlottesville, which I was apart of. My bootcamp team picked
                            up the scraps and built a dashboard meant to be used by City of Charlottesville employees to manage streetlight utilities in the city. </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faLanguage} size='2x'/></th>
                            <td>Language Learning has been mostly on hold for a while. I just have not had time since the bootcamp started to devote much energy to it. I am happy to at least have maintained my practice of 
                            reading the news in Spanish for 10-15 minutes on <a href="https://www.euronews.com/">Euronews</a>.</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faBook} size='2x'/></th>
                            <td>Currently I am reading <a href="https://www.goodreads.com/book/show/2076722.A_Voyage_Long_and_Strange">A Voyage Long and Strange</a> by Tony Horwitz. It's a story about the forgotten period of American history between 1492 
                            when Columbus landed and 1620 when the pilgrims landed at Plymouth Rock. Sarah introduced me to Tony Horwitz and I really enjoy his easy to read journalistic writing style.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Now
