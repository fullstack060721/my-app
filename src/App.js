import React, { Component } from 'react';
import Car from './components/Car'
import Garage from './components/Garage'
import AddCar from './components/AddCar';

class App extends Component {
  static my_car_seq = 4;
  state = {
    my_cars: [
      {brand: "Honda", model: "Civic", color: "Black", year: 2018, id: 1}, 
      {brand: "Toyota", model: "Kamry", color: "White", year: 2019, id: 2}, 
      {brand: "Ferrari", model: "Testa rocca", color: "Red", year: 2020, id: 3} 
    ]
  }
  addCar = (new_car) => {
    const new_arr = [...this.state.my_cars]
    new_arr.push({...new_car, id: App.my_car_seq++})
    this.setState(
        {
            my_cars: new_arr
        }
    )
}
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Garage!</p>
      <hr />
      <Garage cars={this.state.my_cars} />
      <AddCar addCar = {this.addCar} />
      </header>
    </div>
    );
  }
}

export default App;
