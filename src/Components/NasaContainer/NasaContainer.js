import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NasaContainer.css";

// useEffect(() => {
//   console.log("Effect!");
// });

let NasaContainer = () => {
  let [nasaPics, setNasaPics] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=c4lsvUFmisghG73IVzqvVFocipsn2YTRmUKPoLao`
      )
      .then((response) => {
        console.log(response.data);
        setNasaPics(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <container className="nasaContainer">
        <div>
          <img className="image" src={nasaPics.hdurl}></img>
        </div>
        <div>
            <h2>{nasaPics.title}</h2>
          <p>{nasaPics.explanation}</p>
        </div>
      </container>
    </div>
  );
};

export default NasaContainer;
