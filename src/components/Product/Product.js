import React from 'react';

const Product = (props) => {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.imgurl}</p>
      <p>{props.product.price}</p>
      <button onClick={() => props.selectProduct(props.product)}>Edit</button>
      <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
    </div>
  );
};

export default Product