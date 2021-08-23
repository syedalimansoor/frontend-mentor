import React, { Component } from "react";
import "./Selector.scss";

import Option from "../Option/Option";
import CustomOption from "../CustomOption/CustomOption";

/** Renders a list of Option components with preset values, and a CustomOption component for custom input.
 */
export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state.isEditing is set to true when the CustomInput is in focus, preventing the other Options from being selected while the input is being edited.
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCustomInputChange = this.handleCustomInputChange.bind(this);
  }

  handleChange(evt) {
    this.props.handleChange(evt);
  }

  handleCustomInputChange(evt) {
    evt.target.value /= 100;
    this.props.handleChange(evt);
  }

  render() {
    return (
      <div className="Selector">
        <label className="Selector__label">{this.props.label}</label>
        <div className="Selector__grid">
          {this.props.options.map((optn) => (
            <Option
              name={this.props.name}
              value={optn.value}
              label={optn.label}
              checked={
                !this.state.isEditing ? this.props.value === optn.value : false
              }
              handleChange={this.handleChange}
              key={optn.label}
            />
          ))}
          <CustomOption
            name={this.props.name}
            // I do not know what I wrote here, and I won't attempt explaining
            value={
              !this.props.options.some((optn) =>
                !this.state.isEditing ? this.props.value === optn.value : false
              )
                ? this.props.value * 100
                : ""
            }
            placeholder="Custom"
            handleChange={this.handleCustomInputChange}
            handleFocus={() => this.setState({ isEditing: true })}
            handleBlur={() => this.setState({ isEditing: false })}
          />
        </div>
      </div>
    );
  }
}
