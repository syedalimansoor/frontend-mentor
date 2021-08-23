import React, { Component } from "react";
import "./CalculatorOutput.scss";

import Output from "../Output/Output";

export default class CalculatorOutput extends Component {
  render() {
    return (
      <output className="CalculatorOutput">
        <Output
          label="Tip Amount"
          unit="/ person"
          value={this.props.tipAmount ? this.props.tipAmount : "0.00"}
        />
        <Output
          label="Total"
          unit="/ person"
          value={this.props.total ? this.props.total : "0.00"}
        />
        <button
          className="CalculatorOutput__reset"
          onClick={this.props.resetCalculator}
          disabled={this.props.isCalculatorEmpty()}
        >
          RESET
        </button>
      </output>
    );
  }
}
