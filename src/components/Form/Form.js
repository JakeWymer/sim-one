import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: '',
      name: '',
      price: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }
  
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  clearInput() {
    this.setState({imgurl: '', name: '', price: ''});
  }

  createProduct() {
    axios.post('/api/product', {name: this.state.name, price: this.state.price, imgurl: this.state.imgurl});

    this.clearInput();

    this.props.getInventory();
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          name="imgurl"
          value={this.state.imgurl}
          onChange={this.handleInput}
          placeholder="imgurl"/>
        <input 
          type="text" 
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
          placeholder="name"/>
        <input
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.handleInput}
          placeholder="price"/>
        <button onClick={this.createProduct}>Add</button>
        <button onClick={this.clearInput}>Cancel</button>          
      </div>
    );
  }
}

export default Form;