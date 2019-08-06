import React from 'react'

//In the components/DelayedButton.js file, create a DelayedButton React component

export default class DelayedButton extends React.Component {


//This component takes two props: onDelayedClick (a function), and delay (a number).
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

//Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout()
//The setTimeout() should be set to this.props.delay.


  render(){
    return(
      <button onClick={this.handleClick}>Click</button>
    )
  }
}
