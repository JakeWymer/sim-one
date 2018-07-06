import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  return (
    <div className="product">
      <div className="img-panel" style={{backgroundImage:`url(${props.product.imgurl})`}}>
      </div>
      <div className="product-info">
        <div className="info">
          <p>{props.product.name}</p>
          <p>${props.product.price}</p>
        </div>
        <div className="buttons">
          <Link to={`/edit/${props.product.id}`}><button>Edit</button></Link>
          <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Product