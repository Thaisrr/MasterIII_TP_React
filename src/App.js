import React from "react";
import "./App.css";
import Converter from "./components/Converter/Converter";
import AppBar from "./components/AppBar/AppBar";

const App = () => (
  <div className="App">
    <AppBar />
    <main>
      <Converter />
    </main>
  </div>
);

export default App;
