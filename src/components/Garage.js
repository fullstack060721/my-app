import React, { Component } from 'react';

class Garage extends Component {
    shouldComponentUpdate (nextProps) {
        console.log('===================')
        return nextProps.cars.length != 0
    }

  render() {
    console.log(this.props)
    const { cars } = this.props
    //const cars = this.props.cars

    const { delete_car } = this.props 
    const cars_list = cars.map(_car => {
        return _car.year > 2017 ? (
            <div key={_car.id}>
                <p>Brand: {_car.brand}</p>
                <p>Model: {_car.model}</p>
                <p>Color: {_car.color}</p>
                <button style={{background: 'pink'}}
                   onClick={() => delete_car (_car.id)}>X</button>
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
