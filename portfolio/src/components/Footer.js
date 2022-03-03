import React from "react";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";

export default function Footer() {
    return (
    <div>
        <a class="footer" href="https://mojikalani.github.io/daily-zodiac-forecast/">
             <img class="workimg" id="firstimg"
            src={Github}
            alt="placeholder"
            ></img>
            <a href="https://github.com/mojikalani/daily-zodiac-forecast"> Link to the github </a>
            <h3>
                Western Horoscope
            </h3>
        </a>
    </div>
    );
}