// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClickEvent = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };
  render() {
    return <button onClick={this.handleClickEvent}>CoordinatesButton</button>;
  }
}

export default CoordinatesButton;
