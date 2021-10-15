import React, { Component } from 'react';
import Car from './components/Car'

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Hello world!</p>
      <Car brand="Honda" model="Civic" color="Black" />
      <hr />
      <Car brand="Toyota" model="Kamry" color="White" />
      <hr />
      <Car brand="Ferrari" model="Testa rocca" color="Red" />
      </header>
    </div>
    );
  }
}

export default App;
