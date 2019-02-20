import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import "../styles/App.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 5000,
    numMonthsValue: 6
  };
h
  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleMonthChange = value => {
    this.setState({ numMonthsValue: value });
  };

  render() {
    let { amountValue, numMonthsValue } = this.state;

    return (
      <div className="App">
        <h4>I want to borrow ${amountValue}</h4>
        <InputRange
          step={100}
          maxValue={5000} 
          minValue={500}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Over {numMonthsValue} Month{numMonthsValue > 1 && "s"}
        </h4>
        <InputRange
          step={1}
          maxValue={24}
          minValue={6}
          value={numMonthsValue}
          onChange={this.handleMonthChange}
        />
        <Display months={numMonthsValue} amount={amountValue} />
      </div>
    );
  }
}

export default Calculator;
