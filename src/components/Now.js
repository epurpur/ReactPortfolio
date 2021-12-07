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
                <p>Last Updated: <span>December 7, 2021</span></p>
            </section>
            <section id="nowCategories">
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faQuestion} size='2x'/></th>
                            <td>Life has certainly changed since my last post. My girlfriend and I broke up at the end of the summer so I am living the bachelor life at the moment. I have
                                been thinking hard about taking an extended hiatus away from dating. A relationship is demanding and it is not until you step away from it that you realize 
                                it. Nevertheless, quite a few other things have been happening in my life since then. My friend Hilary is living with me for the winter and it has been very
                                nice so far! I have been starting some home projects. Now that I'll be staying in Charlottesville I have some updates I want to do to the house, one of which
                                will be to paint the downstairs this winter. I have some more ambitious plans I may or may not do as well.
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faSkiing} size='2x'/></th>
                            <td>I have been able to climb a lot this fall, which I really appreciate. I did not go into the fall with any particular projects and feel my performance has been
                                a little lackluster because of that. I've climbed around locally on the Blue Ridge Parkway a bit, doing some new routes and boulder problems and repeating others.
                                I took a week's trip to the Obed in Tennessee, an area I had not really been to much before. That place was great! I also went to the New River Gorge for a couple
                                weekends and always really enjoy my time there. I have some extra time off around Christmas and New Years time so I am thinking I'll follow the weather and try to
                                go on a trip to North Carolina or the Chattanooga area. 
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faDesktop} size='2x'/></th>
                            <td> This fall I have not been programming every day as I was earlier this year. I have done some small projects, mostly in python. The most exciting one was a data wrangling project. 
                                A UVA professor I have been working with has student evaluation data from the classes she is teaching which she wants to pivot into a more easily readable format. It was a tricky 
                                exercise to figure out how to re-arrange the data she was working with but we got it mostly figured out. A fun upcoming project I have started on a little bit will be 'Greenstonia'.
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
                            <td>Currently I am reading two books. One is <a href="https://www.amazon.com/Dune-Chronicles-Book-1/dp/0441013597/ref=sr_1_3?keywords=Dune&qid=1638914562&sr=8-3">Dune</a> by Frank Herbert. 
                            I was inspired to finally read this after the recent movie came out. The other I am re-reading is <a href="https://www.amazon.com/Guide-Good-Life-Ancient-Stoic/dp/0195374614/ref=sr_1_1?keywords=a+guide+to+the+good+life&qid=1638914664&sr=8-1">
                            A Guide to the Good Life</a> by William Irvine. It is about the practices of the ancient stoics such as Seneca and Marcus Aurelius. Basically, it is a book about how to create a philosophy
                            of life for yourself. It is recommended by <a href="https://www.mrmoneymustache.com/">Mr. Money Moustache</a> and many other personal heros of mine. I am re-reading this because it is a lot to digest
                            but the gist of it is to create feelings of happiness in the life you are living. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Now
