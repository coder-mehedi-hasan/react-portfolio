import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    return (
        <div>
            <div className="Products">
                <div className="container">
                    <div className="title">
                        <h3>Our Products</h3>
                    </div>
                    <div className="main">
                        <Product name='Apple Smart Watch' model ='apple-439' color='dark blue' price='34599'></Product>
                        <Product name='Asus Smart Watch' model ='Asus-439' color='black' price='39999'></Product>
                        <Product name='Apple Smart Watch' model ='apple-439' color='dark blue' price='34599'></Product>
                        <Product name='Asus Smart Watch' model ='Asus-439' color='black' price='39999'></Product>
                        <Product name='Apple Smart Watch' model ='apple-439' color='dark blue' price='34599'></Product>
                        <Product name='Asus Smart Watch' model ='Asus-439' color='black' price='39999'></Product>
                        <Product name='Apple Smart Watch' model ='apple-439' color='dark blue' price='34599'></Product>
                        <Product name='Asus Smart Watch' model ='Asus-439' color='black' price='39999'></Product>
                        <Product name='Apple Smart Watch' model ='apple-439' color='dark blue' price='34599'></Product>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;