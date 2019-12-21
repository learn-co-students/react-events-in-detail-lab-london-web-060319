import React from 'react'


//In the components/CoordinatesButton.js file, create a CoordinatesButton React component.

export default class CoordinatesButton extends React.Component{

  //This component takes in one prop: onReceiveCoordinates

handleClick = (event) => {
  this.props.onReceiveCoordinates([event.clientX, event.clientY]);
};

//Within CoordinatesButton, render a button
//create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.

  render() {
    return(
      <button onClick={this.handleClick}>Click</button>
    )
  }

}
