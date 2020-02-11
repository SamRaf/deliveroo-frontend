import React from "react";
import Meals from "./Meals/Meals";
import "../../components/Content-top.css";

function Categories(props) {
  return (
    <div>
      <div>{props.data.name}</div>
      <Meals data={props.data} />
    </div>
  );
}
export default Categories;
