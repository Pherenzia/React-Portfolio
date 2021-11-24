import React from "react";
import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Navigation from "./components/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "project":
        return <Project />;
      case "resume":
        return <Resume />;

      default:
        return <About />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default App;
