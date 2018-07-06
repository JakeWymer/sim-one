import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
  }
  
  deleteProduct(id) {
    axios.delete(`/api/product/${id}`);
    this.props.getInventory();
  }

  render() {
    let products = this.props.inventory.map((e, i) => {
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