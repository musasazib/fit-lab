import React from 'react';

const Product = ({product}) => {
    const { img, name, price } = product;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h1>{price}</h1>
            <button className="btn btn-warning">Add to Cart</button>
        </div>
    );
};

export default Product;