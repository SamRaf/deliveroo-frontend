import React from "react";
import "../components/Content-top.css";
function Content(props) {
  return (
    <>
      <div className="top">
        <h3 className="titreDescription">
          {props.data.restaurant.description}
        </h3>
        <img
          className="imageDescription"
          src={props.data.restaurant.picture}
          alt="photo de description"
        />
      </div>
    </>
  );
}
export default Content;
