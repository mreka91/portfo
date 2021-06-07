import React from "react";
import { navigate } from "@reach/router";
import Button from "./../../components/Button";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-view">
      <img
        src="https://media.giphy.com/media/xUA7b1m2By5WkYHoIg/giphy.gif"
        alt="nothing to see here"
      />
      <p>Oh, no something went wrong! Please go back to the home page</p>
      <Button handleClick={() => navigate("/")}>Go back</Button>
    </div>
  );
};

export default NotFound;
