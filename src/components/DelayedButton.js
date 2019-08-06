// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
  handleDelayClick = e => {
    e.persist();
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay);
  };
  render() {
    return <button onClick={this.handleDelayClick}>DelayedButton</button>;
  }
}

export default DelayedButton;
