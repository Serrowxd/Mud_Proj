import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../styles/reset.css";
import "../styles/App.css";

// App holds all the major logic
// Going to try and one-page this for now

// Simple player object
const player = {
  name: "Kevin",
  currency: "100g",
};

function App() {
  return (
    <div className="wrapper">
      <div className="main-block-wrapper">
        <div className="left-block">
          {/* Text Block */}
          <div className="block text-block">
            <h1>Text Block</h1>
            <p>
              This will be scrolling text, similar to a console, that players will use to understand gameplay actions as
              they occur.
            </p>
          </div>
        </div>
        <div className="right-block">
          {/* Location Block */}
          <div className="block location-block">
            <h1>Location Block</h1>
            <p>Player location within the game world</p>
          </div>
          {/* Character Block */}
          <div className="block character-block">
            <h1>Character Block</h1>
            <p>Character information, such as equipped gear and stats.</p>
          </div>
          {/* Inventory Block */}
          <div className="block inventory-block">
            <h1>Inventory Block</h1>
            <p>Character inventory screen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
