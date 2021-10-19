import React, { Component } from 'react';
import Car from './components/Car'
import Garage from './components/Garage'

class App extends Component {
  state = {
    my_cars: [
      {brand: "Honda", model: "Civic", color: "Black", id: 1}, 
      {brand: "Toyota", model: "Kamry", color: "White", id: 2}, 
      {brand: "Ferrari", model: "Testa rocca", color: "Red", id: 3} 
    ]
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Hello world!</p>
      <Garage cars={this.state.my_cars} />
      </header>
    </div>
    );
  }
}

export default App;
