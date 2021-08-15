import React, { Component } from "react";
import "./CalculatorForm.scss";
import iconDollar from "../../images/icon-dollar.svg";
import iconPerson from "../../images/icon-person.svg";

import Input from "../Input/Input";
import Selector from "../Selector/Selector";

/** Gathers data from form inputs and passes it to the Calculator component */
export default class CalculatorForm extends Component {
  render() {
    return (
      <form className="CalculatorForm">
        <Input
          type="number"
          name="bill"
          label="Bill"
          icon={iconDollar}
          min={0.0}
          step={0.01}
          placeholder="0"
          value={this.props.bill}
          handleChange={this.props.handleInputChange}
        />
        <Selector
          name="tipPercent"
          label="Select Tip %"
          options={[
            { label: "5%", value: 0.05 },
            { label: "10%", value: 0.1 },
            { label: "15%", value: 0.15 },
            { label: "25%", value: 0.25 },
            { label: "50%", value: 0.5 },
          ]}
          value={this.props.tipPercent}
          handleChange={this.props.handleSelectorChange}
          customField
        />
        <Input
          type="number"
          name="nPeople"
          label="Number of People"
          icon={iconPerson}
          min={0}
          step={1}
          placeholder="0"
          value={this.props.nPeople}
          handleChange={this.props.handleInputChange}
        />
      </form>
    );
  }
}
