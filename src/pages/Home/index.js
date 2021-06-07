import React from "react";
import Header from "../../components/Header";
import Cv from "../../components/Cv";
import Profile from "../../components/Profile";
import "./home.css";

function HomePage() {
  return (
    <div className="homeView">
      <div className="left">
        <Header />
        <Cv />
      </div>
      <div className="right">
        <Profile />
      </div>
    </div>
  );
}

export default HomePage;
