import React, { Component } from 'react';
import routes from './routes.js';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  update =() => {
    console.log("hits here");
  }
  render() {
    return (
      <div className="App">
        <Header update={this.update}/>
        {routes}
      </div>
    );
  }
}

export default App;
