import React, { Component } from "react";
import Dice from "../Dice";
import "./RollDice.css";

export default class RollDice extends Component {
  state = { die1: "one", die2: "one", rolling: false };
  rollDice = () => {
    const rolledOne =
      this.props.dice[Math.floor(Math.random() * this.props.dice.length)];
    const rolledTwo =
      this.props.dice[Math.floor(Math.random() * this.props.dice.length)];
    this.setState({ die1: rolledOne, die2: rolledTwo, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Dice face={this.state.die1} rolling={this.state.rolling} />
          <Dice face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button
          className="dsbBtn"
          onClick={this.rollDice}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

RollDice.defaultProps = {
  dice: ["one", "two", "three", "four", "five", "six"],
};
