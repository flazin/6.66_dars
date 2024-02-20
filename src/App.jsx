import Cars from "./components/Cars";
import React, { useState } from "react";
import data from "../src/assets/data/cars.json";
import "./App.css";

function App() {
  const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
      // Call the onSearch callback function passed from the parent component
      onSearch(searchTerm);
    };

    return (
      <div className="header">
        <h1>Search Component</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  return (
    <>
      <Cars cars={data} />
    </>
  );
}

export default App;
