import React from 'react';
import './Product.css'

const Product = (props) => {
    return (
            <div className="product_item">
                <div className="img">
                    <img src="" alt="product" />
                </div>
                <h3>Name: {props.name}</h3>
                <p>Model: {props.model} </p>
                <p>Color: {props.color} </p>
                <p>Price: {props.price} </p>
                <button>Add to cart</button>
                <button>Order Now</button>
            </div>
    );
};

export default Product;