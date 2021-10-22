import React, { Component } from 'react';
import './Garage.css'

class Garage extends Component {
  render() {
    console.log(this.props)
    const { cars } = this.props
    //const cars = this.props.cars
    const { delete_car } = this.props 
    const cars_css = {
        backgroundColor: 'lightblue',
        //padding: this.state.padding,
        //padding: this.props.padding,
        padding: '2px',
        borderRadius: '2px',
        width: '100%'
    }
    const cars_list = cars.map(_car => {
        return _car.year > 2017 ? (
            <div key={_car.id} style={cars_css}>
                <p>Brand: {_car.brand}</p>
                <p>Model: {_car.model}</p>
                <p>Color: {_car.color}</p>
                <button style={{background: 'pink'}}
                   onClick={() => delete_car (_car.id)}>X</button>
                <hr />
            </div>): null });
    return (
        <div className="garage">
            { cars_list }
        </div>
        );
  }
}

export default Garage;
