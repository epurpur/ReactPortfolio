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
                <p>Last Updated: <span>September 6, 2021</span></p>
            </section>
            <section id="nowCategories">
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faQuestion} size='2x'/></th>
                            <td>I have been living the life of a bachelor since the end of August. My girlfriend Sarah is currently on a road trip before starting her new job as an Emergency Medicine physician in 
                                Gallup, New Mexico! The plan is for me to eventually move out there to be with her but at the moment I am still in Charlottesville. The fall semester has started at UVA and the 
                                beginning of each semester is always busy, especially the fall semester. We have also gone back to work in person at the University of Virginia. Naturally, there are some mixed feelings about this.
                                I personally feel OK with it as all UVA students are required to be vaccinated and masks are required indoors. Though it is a bit concerning to see many thousands of people crowding into
                                college football stadiums around the country with little or no mask wearing.  
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faSkiing} size='2x'/></th>
                            <td>Late summer in Virginia is a sweaty time but just before Labor Day weekend we got a brief reprieve from the slime. I went home to Boone, NC for the weekend but spent a day climbing at <a href="https://www.dcr.virginia.gov/state-parks/grayson-highlands">Grayson Highlands State Park</a> on the way there.
                            It felt so nice to get outdoors climbing as I have not had a chance to do it much lately. I am looking forward to the fall so I can get out more often!</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faDesktop} size='2x'/></th>
                            <td>An upcoming side project for me will be for our group to update the <a href="http://www.keylogeconomics.com/ecovaluator.html">EcoValuator</a> Plugin. This is an ongoing project I have worked on over the last several years with <a href="http://www.keylogeconomics.com/">Key-Log Economics</a>.
                            This project is a 3rd party plugin to the <a href="https://www.qgis.org/en/site/">QGIS</a> software and predicts the value of land for various use cases throughout North America. The plan in the future is to make the plugin more robust and also allow for use outside North America.
                            I think Southeast Asia is the next region? Vietnam in particular. This is because Key-Log Economics has expanded work into that region. I am meeting later this week with Key-Log so will have more details coming soon.</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faLanguage} size='2x'/></th>
                            <td>Language Learning has been mostly on hold for a while. I just have devoted much energy to it lately. I am happy to at least have maintained my practice of reading the news in Spanish for 10-15 minutes on <a href="https://www.euronews.com/">Euronews</a>.</td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faBook} size='2x'/></th>
                            <td>Currently I am reading <a href="https://www.amazon.com/Bury-My-Heart-Wounded-Knee/dp/0805086846">Bury My Heart at Wounded Knee</a> by Dee Brown. It is a tale about the systematic destruction of the large Native American tribes west of the Mississippi River in the mid to late 1800s. 
                            As I'll be moving to New Mexico to be with Sarah sometime in the not so distance future, I'll be living in the heart of native american country and I want to understand a little bit more about these people. While the book is depressing it is also very interesting to learn about these people who 
                            were a part of the great nations who once lived in the western United States. Though it makes me feel ashamed in many ways to be an american, this is a highly recommended read!</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Now
