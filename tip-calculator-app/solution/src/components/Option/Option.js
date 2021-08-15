import React, { Component } from "react";
import "./Option.scss";

export default class Option extends Component {
  render() {
    return (
      <label className="Option">
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.handleChange}
          className="Option__radio"
          checked={this.props.checked}
        />
        <span className="Option__content">{this.props.label}</span>
      </label>
    );
  }
}
