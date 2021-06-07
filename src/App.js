import React from "react";
import { Router, Link } from "@reach/router";
import themes from "./theme/themes";
import ThemeIcon from "./components/ThemeIcon";

//pages components
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [theme, setTheme] = React.useState("dark");

  const toggleDarkMode = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
  };

  return (
    <div className="App" style={themes[theme]}>
      <ThemeIcon handleClick={toggleDarkMode} />
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
