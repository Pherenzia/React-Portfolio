import React from "react";
import profile from "./assets/snowboard-pic-edit.jpg";

export default function About() {
  return (
    <div>
      <div class="about-me light-cyan-B margin">
        <h1 class="silver-sand-B center "> About Me </h1>
        <div class="bio">
          <img 
            id="profile-pic"
            src={profile} 
            alt="Profile-image">
            </img>
          <p id="description">
            Full-stack web developer with extensive background in communication and
            teamwork. Multilingual for adaptable work environments and clientele.
            Comfortable in high stress time limited scenarios and attending to the
            needs of pushy clients respectfully. Certified in
            full stack development at the UC San Diego Extension program, refining
            skills in REST APIs, MYSQL, MongoDB, Javascript and CSS frameworks.
            Driven to succeed, dedicated in making clean, compartmentalized code,
            effective in communicating its purpose to other future developers.
          </p>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
}
