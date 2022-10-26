import React, { useState } from "react";
import "./App.css";
import NavInshorts from "./components/NavInshorts";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <NavInshorts setCategory={category} />
      <h2> hello</h2>
    </div>
  );
}

export default App;
