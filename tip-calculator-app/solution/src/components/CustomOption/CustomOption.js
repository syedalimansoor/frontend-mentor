import React, { Component } from "react";
import "./CustomOption.scss";

export default class CustomOption extends Component {
  render() {
    return (
      <input
        className="CustomOption"
        type="number"
        name={this.props.name}
        value={this.props.value ? this.props.value : ""}
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
        onFocus={this.props.handleFocus}
        onBlur={this.props.handleBlur}
      />
    );
  }
}
