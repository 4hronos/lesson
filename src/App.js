import React from "react";
import Navbar from "./components/Header";
import RollDice from "./components/RandomDice";

function App() {
  return (
    <React.Fragment>
      <Navbar title="Roll a Dice!" />
      <hr />
      <div className="App">
        <RollDice />
      </div>
    </React.Fragment>
  );
}

export default App;
