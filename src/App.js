import React from "react";
import { Router, Link } from "@reach/router";

//pages components
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="projects">Projects</Link>
      </nav>
      <Router>
        <HomePage path="/" loggedIn={true} />
        <Projects path="/projects" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
