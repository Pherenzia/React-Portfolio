import React from "react";
import zodiac from "./assets/zodiac.PNG"
import cheatsheet from "./assets/Cheatsheet.PNG"
import mytripjournal from "./assets/myTripJournal.PNG"
import weather from "./assets/Weather.PNG"

export default function Project() {
    return (
<section class="bottomborder">
        <h2>
            <a id="workpage" href>
            Work
            </a>
        </h2>
         <a class="columncontainer" href="https://mojikalani.github.io/daily-zodiac-forecast/">
             <img class="workimg" id="firstimg"
            src={zodiac}
            alt="placeholder"
            ></img>
            <a href="https://github.com/mojikalani/daily-zodiac-forecast"> Link to the github </a>
            <h3>
                Western Horoscope
            </h3>
        </a>
        <a class="columncontainer" href="https://pherenzia.github.io/Weather-App/">
            <img class="workimg" 
            src={weather}
            alt="placeholder"
            ></img>
            <a href="https://github.com/Pherenzia/Weather-App"> Link to the github </a>
            <h3>
                Weather App
            </h3>
        </a>
        <a class="columncontainer" href="https://pherenzia.github.io/css-snippet-cheatsheet/">
            <img class="workimg"
            src={cheatsheet}
            alt="placeholder"
            ></img>
            <a href="https://github.com/Pherenzia/css-snippet-cheatsheet"> Link to the github </a>
            <h3>
                CSS Snippet Cheatsheet
            </h3>
        </a>
        <a class="columncontainer" href="https://my-trip-journal2.herokuapp.com/">
            <img class="workimg"
            src={mytripjournal}
            alt="placeholder"
            ></img>
            <a href="https://github.com/jmoniz155/my-trip-journal"> Link to the github </a>
            <h3>
                myTripJournal
            </h3>
        </a>
        </section>
    );
}