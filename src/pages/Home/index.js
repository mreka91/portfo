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
        <Profile popup="Looking for LIA between 29/11/2021 - 06/06/2022" />
      </div>
    </div>
  );
}

export default HomePage;
