import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/musasazib/fake-dada/main/src/components/FitLab/productFakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 className="text-color mt-5 text-center">CHOOSE YOUR PRODUCT AND BOOST YOUR BODY STRENGTH</h2>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;