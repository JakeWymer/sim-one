import React from 'react';

const Product = (props) => {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.imgurl}</p>
      <p>{props.product.price}</p>
    </div>
  );
};

export default Product