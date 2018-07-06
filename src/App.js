import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      selectedProduct: null
    };

    this.getInventory = this.getInventory.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  async getInventory() {
    let products = await axios.get('/api/inventory');
    this.setState({inventory: products.data});
  }
  
  selectProduct(selectedProduct) {
    this.setState({selectedProduct});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={this.state.inventory}
          getInventory={this.getInventory}
          selectProduct={this.selectProduct}/>
        <Form 
          getInventory={this.getInventory}
          selectedProduct={this.state.selectedProduct}/>
      </div>
    );
  }
}

export default App;
