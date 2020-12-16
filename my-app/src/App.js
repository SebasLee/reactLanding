import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max'},
      { name: 'Manu'},
      { name: 'Jane'}
    ]
  }

  render() {
   return ( 
    <div className="App">
      <button>Switch Name</button>
      <Person name={this.state.persons[0].name} />
      <Person name={this.state.persons[1].name} >My Hobbies: Racing</Person>
    </div>
   );
  }
}

export default App;
