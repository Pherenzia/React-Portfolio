import React from "react";

export default function Navigation(currentPage, handlePageChange) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-brand" href="#">
        Navbar
      </button>
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
          <li class="nav-item dropdown">
            <button
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                Action
              </a>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Another action
              </a>
              <a
                href="#project"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Something else here
              </a>
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
