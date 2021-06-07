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
      <h3>Oh, no something went wrong! Please go back to the home page</h3>
      <Button handleClick={() => navigate("/")}>Go back</Button>
    </div>
  );
};

export default NotFound;
