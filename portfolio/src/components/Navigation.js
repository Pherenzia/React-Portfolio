import React from "react";


export default function Navigation({currentPage, handlePageChange}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          
              <a
                class="heliotrope-T nav-button"
                href
                onClick={() => handlePageChange("about")}
                className={
                  currentPage === "About" ? "nav-link active heliotrope-T nav-button" : "nav-link"
                }
              >
                About Me
              </a>
              <a
                class="heliotrope-T nav-button"
                href
                onClick={() => handlePageChange("contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact Me
              </a>
              <a
                class="heliotrope-T nav-button"
                href
                onClick={() => handlePageChange("project")}
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
              <a
                class="heliotrope-T"
                href
                onClick={() => handlePageChange("resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
           
        </ul>
      </div>
    </nav>
  );
}
