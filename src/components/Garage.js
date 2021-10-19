import React, { Component } from 'react';

class Garage extends Component {
  render() {
    console.log(this.props)
    const { cars } = this.props
    //const cars = this.props.cars

    const cars_list = cars.map(_car => {
        return _car.year > 2018 ? (
            <div key={_car.id}>
                <p>Brand: {_car.brand}</p>
                <p>Model: {_car.model}</p>
                <p>Color: {_car.color}</p>
                <hr />
            </div>): null });
    return (
        <div >
            { cars_list }
        </div>
        );
  }
}

export default Garage;
