import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content-top";
import Categorie from "./components/Categories/Categorie";
// import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://sam-deliveroo-backend.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://sam-deliveroo-backend.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <Header />
        <hr />
      </div>
      <div className="App">
        {isLoading === true ? (
          <p>En cours de chargement ...</p>
        ) : (
          <div>
            <h1>{data.restaurant.name}</h1>

            <Content data={data} />

            {data.categories.map((categorie, index) => {
              console.log(categorie);

              return <Categorie data={categorie} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
