// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        console.log(this.props.onReceiveCoordinates([event.clientX, event.clientY]))
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}

export default CoordinatesButton;
