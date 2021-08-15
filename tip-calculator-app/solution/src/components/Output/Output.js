import React, { Component } from "react";
import "./Output.scss";

export default class Output extends Component {
  render() {
    return (
      <div className="Output">
        <div>
          <p className="Output__label">{this.props.label}</p>
          <p className="Output__unit">{this.props.unit}</p>
        </div>
        <strong className="Output__value">${this.props.value}</strong>
      </div>
    );
  }
}
