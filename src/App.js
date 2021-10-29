import React, { Component } from 'react';
import Car from './components/Car'
import Garage from './components/Garage'
import { connect } from 'react-redux';
import AddCar from './components/AddCar';
import { delete_car_action } from'./actions/delete_car'
import { add_car_action } from'./actions/add_car'

class App extends Component {
  /*
  state = {
    my_cars: [
      {brand: "Honda", model: "Civic", color: "Black", year: 2018, id: 1}, 
      {brand: "Toyota", model: "Kamry", color: "White", year: 2019, id: 2}, 
      {brand: "Ferrari", model: "Testa rocca", color: "Red", year: 2020, id: 3} 
    ]
  }
  */
  addCar = (new_car) => {
    /*
    const new_arr = [...this.state.my_cars]
    new_arr.push({...new_car, id: App.my_car_seq++})
    this.setState(
        {
            my_cars: new_arr
        }
    )
    */
   console.log('aaaaaaaadddddddddddddd')
   console.log(this.props)
   this.props.add_car(new_car)
  }
  deleteCar = (_id) => {
    /*
    const new_cars = this.state.my_cars.filter(car => car.id !== _id)
    this.setState({
      my_cars : new_cars
    })
    */
   console.log(this.props)
   this.props.delete_car(_id)
  }
  render() {
    return (
      <div className="App" style={{marginLeft: 10}}>
        <header className="App-header">
        <p>Garage!</p>
        <hr />
        <Garage cars = {this.props.my_cars} delete_car = {this.deleteCar} />
        <AddCar addCar = {this.addCar} />
        </header>
      </div>
      );
    }
}

const mapStateToProps = (store_state, current_props) => {
  console.log('==== mapper own props')
  console.log(current_props)
  console.log('==== mapper state')
  console.log(store_state.my_cars)
  // this will be this component props
  return {
    ...current_props,
    my_cars: store_state.my_cars 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete_car: id => dispatch( delete_car_action(id) ),
    add_car: new_car => dispatch( add_car_action(new_car) ) 
    // id => dispatch( {type: 'DELETE_CAR', car_id: id} )
    // (id) => {console.log('hello world')}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
