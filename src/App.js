import React, { Component } from 'react';
import ContainerForShirtList from './components/Cart'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerForShirtList />
      </div>
    );
  }
}

export default App;
