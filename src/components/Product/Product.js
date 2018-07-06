import React from 'react';
import {Link} from 'react-router-dom';

const Product = (props) => {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.imgurl}</p>
      <p>{props.product.price}</p>
      <Link to={`/edit/${props.product.id}`}><button>Edit</button></Link>
      <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
    </div>
  );
};

export default Product