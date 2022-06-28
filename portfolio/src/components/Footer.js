import React from "react";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";

export default function Footer() {
    return (
        <div class="footer">
        <a  id="githubimg" href="https://github.com/pherenzia">
             <img 
            class="icon"
            src={Github}
            alt="placeholder"
            ></img>
        </a>
        <a id="linkedinimg" href="https://linkedin.com/in/mitchell-riley">
             <img 
            class="icon"
            src={Linkedin}
            alt="placeholder"
            ></img>
        </a>
    </div>
    );
}