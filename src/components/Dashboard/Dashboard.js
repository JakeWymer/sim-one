import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  render() {
    let products = this.props.inventory.map((e, i) => {
      return <Product key={i} product={e}/>
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