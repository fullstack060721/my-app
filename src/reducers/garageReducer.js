const init_state = {
    my_cars: [
        {brand: "Honda", model: "Civic", color: "Black", year: 2018, id: 1}, 
        {brand: "Toyota", model: "Kamry", color: "White", year: 2019, id: 2}, 
        {brand: "Ferrari", model: "Testa rocca", color: "Red", year: 2020, id: 3} 
      ],
    my_car_seq: 4
}

const garageReducer = (reducer_state = init_state, action) => {
    console.log('======== reducer state ')
    console.log(reducer_state)
    console.log('======== reducer action ')
    console.log(action)
    if (action.type == 'DELETE_CAR') {
        const new_cars = reducer_state.my_cars.filter(car => car.id !== action.car_id)
        return {
          ...reducer_state,
          my_cars : new_cars
        }   
    }
    else if (action.type == 'ADD_CAR') {
        const new_arr = [...reducer_state.my_cars]
        new_arr.push({...action.new_car, id: reducer_state.my_car_seq++})
        console.log(new_arr)
        return  {
                ...reducer_state,
                my_cars: new_arr
            }
    }
    return reducer_state;
}

export default garageReducer;