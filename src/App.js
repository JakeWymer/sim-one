import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default App;
