import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }
     handleChange = (num) => {
        this.setState({userInput:num})
    }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine" />
        <button className="confirmationButton"></button>
        <span className="resultsBox">Evens:</span>
        <span className="resultsBox">Odds:</span>
      </div>
    );
  }
}

export default EvenAndOdd;
