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
        <Profile popup="Looking for LIA between 2021/11/29-2022/06/03" />
      </div>
    </div>
  );
}

export default HomePage;
