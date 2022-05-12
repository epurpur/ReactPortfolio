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
                <p>Last Updated: <span>May 11, 2022</span></p>
            </section>
            <section id="nowCategories">
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faQuestion} size='2x'/></th>
                            <td>To be honest, I would say the last 6-8 months have been some of the best in my life. I have been able to travel again and went on a post-covid binge including trips
                                to Costa Rica, Colorado, and the Red River Gorge. Upcoming very soon I will be spending two weeks in Alaska at Glacier Bay National Park with a group of friends. We
                                will be kayak packing, which I have never done before! I have also never spent that length of time away from civilization and all of it's trappings but I think it will
                                be a great reset for me to get away from things for a short time. 
                                <br></br>
                                I have embraced being single and for the moment have decided that it is the right thing for me. It is very freeing
                                to not have to worry about dating and relationships until further notice and I honestly just want to be selfish with my time and energy for a while. This spring I have
                                been prioritizing spending time with friends and family. Life is good!
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faSkiing} size='2x'/></th>
                            <td>I have been able to climb a lot this spring and I have mostly been sport climbing. I kicked off the year climbing a bit in Colorado and then my friend Corey and I spent
                                a week at the Red River Gorge in March. Since then I have mostly been climbing around Charlottesville with a couple weekend trips to the New River Gorge sprinkled in. 
                                One thing that has been really nice this spring is a revival of interest in our local sport crag, Sugar Hollow. I have been able to do some new, and pretty hard, routes 
                                there and have had the chance to work on some others. At this point in the spring I feel like I am really lacking some bouldering power. After the Alaska trip I will get
                                back on the horse. It is always healthy to take a break at the end of a climbing season to refresh the mind and body. 
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faDesktop} size='2x'/></th>
                            <td> This spring I have not been programming every day as I was last year. A fun upcoming project I have started on a little bit will be 'Greenstonia'.
                                This will be similar to <a href="https://www.mountainproject.com/">Mountain Project</a>, specifically tailored for the local bouldering on the Blue Ridge Parkway. There
                                was a .pdf guide available on line 8 or 10 years ago but it is out of date and now is unavailable offline. In order to keep my coding chops up and have some fun, I want to re-do this
                                in a modern way. It will be a MERN stack application.
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faLanguage} size='2x'/></th>
                            <td>Language Learning has been mostly on hold for a while. I just have devoted much energy to it lately. I am happy to at least have maintained my practice of reading the news in Spanish 
                                for 10-15 minutes on <a href="https://www.euronews.com/">Euronews</a>.
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faBook} size='2x'/></th>
                            <td>Currently I am reading a couple books. One is <a href="https://www.amazon.com/Salt-Sugar-Fat-Giants-Hooked/dp/0812982193">Salt, Sugar, Fat: How the Food Giants Hooked Us</a> by Michael Moss. 
                            Basically it is the story of processed food in the United States and why large food conglomerates such as General Foods and Philip Morris added these ingredients to our food in order to raise profits.
                            The other is <a href="https://www.amazon.com/Beastmaking-fingers-first-approach-becoming-climber/dp/1839810092/ref=sr_1_1?crid=VKSXN8OVRJU9&keywords=beastmaking&qid=1652319714&s=books&sprefix=beastmaking%2Cstripbooks%2C85&sr=1-1">
                            Beastmaking</a> by Ned Feehally. This is a climbing training book written by Ned Feehally, who is a very prolific boulderer and also owner/operator of Beastmaker, which manufactures hangboards and other climbing
                            training items. It is a holistic approach to training and doesn't get so bogged down in the details. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Now
