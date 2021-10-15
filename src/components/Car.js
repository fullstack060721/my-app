import React, { Component } from 'react';

class Car extends Component {
  render() {
    // <Car brand="Toyota" model="Kamry" color="White"></Car>
    console.log(this.props)
    const { brand, model, color } = this.props
    //const brand = this.props.brand x3
  return (
    <div >
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
    </div>
    );
  }
}

export default Car;
