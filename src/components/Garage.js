import React, { Component } from 'react';

class Garage extends Component {
  render() {
    // <Car brand="Toyota" model="Kamry" color="White"></Car>
    console.log(this.props)
    const { cars } = this.props
    //const cars = this.props.cars

    const cars_list = cars.map(_car => {
        return (
            <div key={_car.id}>
                <p>Brand: {_car.brand}</p>
                <p>Model: {_car.model}</p>
                <p>Color: {_car.color}</p>
                <hr />
            </div>) });
    return (
        <div >
            { cars_list }
        </div>
        );
  }
}

export default Garage;
