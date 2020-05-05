import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import NasaContainer from "./Components/NasaContainer/NasaContainer.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <NasaContainer />
      <Footer />
    </div>
  );
}

export default App;
