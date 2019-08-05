// Code CoordinatesButton Component Here
import React, { Component } from "react"

export default class CoordinatesButton extends Component {


    clickHandler = (event) => {
        console.log(this.props.onReceiveCoordinates)
        let emptyArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(emptyArray)
    }


    render() {
        return (
                <button onClick={this.clickHandler}>Coordinate!</button>
        )
    }
}