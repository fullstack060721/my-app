import React, { Component } from 'react';
class ComponentOne extends React.Component {
 
    // Defining the componentWillUnmount method
    componentWillUnmount() {
      //alert('The component is going to be unmounted');
      console.info('unmount .... clear memory....')
    }
   
    render() {
      return <h1>Hello Geeks!</h1>;
    }
  }

  export default ComponentOne;