import React, { Component } from "react";
import "./Calculator.scss";

import CalculatorForm from "../CalculatorForm/CalculatorForm";
import CalculatorOutput from "../CalculatorOutput/CalculatorOutput";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    // Setting state for form inputs
    this.state = {
      bill: 0,
      tipPercent: 0,
      nPeople: 0,
    };
    // Event-handler bindings
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
    // Reset functions binding
    this.isCalculatorEmpty = this.isCalculatorEmpty.bind(this);
    this.resetCalculator = this.resetCalculator.bind(this);
  }

  /** Updates state when text inputs are changed */
  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: Number(evt.target.value),
    });
  }

  /** Updates state when selector input is changed */
  handleSelectorChange(evt) {
    this.setState({
      [evt.target.name]: Number(evt.target.value),
    });
  }

  /** Returns true if calculator is empty */
  isCalculatorEmpty() {
    const { bill, tipPercent, nPeople } = this.state;
    return bill === 0 && tipPercent === 0 && nPeople === 0;
  }

  /** Empties all the form inputs */
  resetCalculator() {
    this.setState({ bill: 0, tipPercent: 0, nPeople: 0 });
  }

  render() {
    // Calculate tip amount per person from state
    let tipAmount = Number(
      ((this.state.bill * this.state.tipPercent) / this.state.nPeople).toFixed(
        2
      )
    );

    // Calculate total per person from state
    let total = Number(
      (this.state.bill / this.state.nPeople + tipAmount).toFixed(2)
    );

    return (
      <main className="Calculator">
        <CalculatorForm
          handleFormInput={this.handleFormInput}
          handleInputChange={this.handleInputChange}
          handleSelectorChange={this.handleSelectorChange}
          bill={this.state.bill}
          tipPercent={this.state.tipPercent}
          nPeople={this.state.nPeople}
        />
        <CalculatorOutput
          tipAmount={isFinite(tipAmount) ? tipAmount : "0.00"}
          total={isFinite(total) ? total : "0.00"}
          resetCalculator={this.resetCalculator}
          isCalculatorEmpty={this.isCalculatorEmpty}
        />
      </main>
    );
  }
}
