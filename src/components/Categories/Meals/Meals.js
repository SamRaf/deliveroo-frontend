import React from "react";
import "./Meals.css";

function App(props) {
  console.log("prrrrop", props);
  //   return <div>gello</div>;
  return (
    <div>
      {props.data.meals.map((value, index) => {
        console.log("valuuuuuue", value);

        return (
          <div>
            {value.title}
            {value.description}
            {value.price}

            {value.popular === true ? "POPULAIREUUUUUUH" : ""}
            {value.picture ? (
              <img className="imageMeal" src={value.picture} alt="image" />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
export default App;
