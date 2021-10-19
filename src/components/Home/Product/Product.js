import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const { img, name, price } = product;
    return (
        <div className="service-product pb-3">
            <img src={img} alt="" />
            <h3 className="name">{name}</h3>
            <h1>{price}</h1>
            <button className="btn btn-product">Add to Cart</button>
        </div>
    );
};

export default Product;