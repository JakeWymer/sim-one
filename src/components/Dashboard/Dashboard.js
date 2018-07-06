import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    };

    this.deleteProduct = this.deleteProduct.bind(this);
    this.getInventory = this.getInventory.bind(this);
  }
  
  componentDidMount() {
    this.getInventory();
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`);
    this.getInventory();
  }

  async getInventory() {
    let products = await axios.get('/api/inventory');
    this.setState({inventory: products.data});
  }

  render() {
    let products = this.state.inventory.map((e, i) => {
      return <Product 
                key={i} 
                product={e}
                deleteProduct={this.deleteProduct}
                selectProduct={this.props.selectProduct}/>
    });

    return (
      <div>
        <h1>Dashboard</h1>
          {products}
      </div>
    );
  }
}

export default Dashboard;