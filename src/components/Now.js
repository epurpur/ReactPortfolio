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
                <p>Last Updated: <span>June 22, 2022</span></p>
            </section>
            <section id="nowCategories">
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faQuestion} size='2x'/></th>
                            <td>Life has been great recently! The most exciting that happened is I spent 2 weeks at Glacier Bay National Park, Alaska in late May/early June. We spent 14 days sea kayaking
                                and it was absolutely spectacular. We had a group of six people and were 2 to a kayak. We carried all of our food and supplies with us in the kayaks.
                                Never have I been somewhere so full of wildlife. We saw it all including bears, whales, eagles, wolf, coyote, seals, otters, moose, etc. Besides some cruise ships, we had 
                                the entire place to ourselves and didn't interact with anyone else. There is too much to say but it was two of the best weeks of my life!
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faSkiing} size='2x'/></th>
                            <td>I took about 3 weeks off climbing for the Alaska trip and also just because I was feeling tired after a lot of climbing this spring. I don't have too much planned on the 
                                climbing front this summer. I will probably climb a bit in Boone around the 4th of July but otherwise will just train in the gym. One thing I want to do is spend time exploring
                                the rivers around Charlottesville. There are a lot of them and it is too hot to do much else. My friend Peter and I floated a section of the Rockfish River recently and we
                                wondered why we haven't been doing this all along?
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
                                for 10-15 minutes on <a href="https://www.euronews.com/">Euronews</a>. I also watch an episode of <a href="https://en.wikipedia.org/wiki/Narcos:_Mexico">Narcos: Mexico</a> once or twice a week, which is mostly in Spanish. I turn on Spanish subtitles while watching.
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <th scope="row"><FontAwesomeIcon icon={faBook} size='2x'/></th>
                            <td>Currently I am reading a couple books. One is <a href="https://www.amazon.com/Early-Retirement-Extreme-Philosophical-Independence/dp/145360121X">Early Retirement Extreme</a> by Jacob Lund Fisker. 
                            In this book, the author takes a systems approach to thinking about "early retirement" and how to build a resilient life using a systems approach. In an nutshell, his message is to think about your life as a system and
                            elements of you life as subsystems within. For example, if you lost your job, would rest of your life fall apart? How about if your car blew up? Jacob made waves for living VERY cheaply and frugally on around $7000 USD/year. 
                            While I think Jacob's lifestyle is a bit too extreme for me, it is a really interesting take on financial independence and good to think about. You can see <a href="https://earlyretirementextreme.com/">earlyretirementextreme.com</a> to
                            read more from Jacob.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Now
