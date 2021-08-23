import React, { Component } from "react";
import "./Input.scss";

/** Renders an Input component, consisting of:
 * - an input label
 * - an input icon/symbol
 * - an input form element
 * - an error message that shows for a specific class (".Input__field--error")
 */
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.handleChange(evt);
  }

  checkValidity() {
    return this.props.value < this.props.min;
  }

  render() {
    return (
      <div className="Input">
        {this.props.label && (
          <label className="Input__label" htmlFor={this.props.name}>
            {this.props.label}
          </label>
        )}

        <label className="Input__field-wrapper">
          {this.props.icon && (
            <img className="Input__icon" src={this.props.icon} alt="" />
          )}
          <input
            className={`Input__field${
              this.checkValidity() ? " Input__field--error" : ""
            }`}
            type={this.props.type}
            name={this.props.name}
            id={this.props.name}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            placeholder={this.props.placeholder}
            // Display the value if its not 0
            value={this.props.value ? this.props.value : ""}
            onChange={this.handleChange}
          />
        </label>

        {/* Conditionally show error message */}
        {this.checkValidity() && (
          <div className="Input__error-msg">Invalid input</div>
        )}
      </div>
    );
  }
}
