import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {
  render() {
   return ( 
    <div className="App">
      <Person name="Max" />
      <Person name="Jane" >My Hobbies: Racing</Person>
    </div>
   );
  }
}

export default App;
