import React from 'react';
import './product.css';
const ProductList = (props) => {
    const { products } = props;
    return (
        <div className="product-list">
            {products.map((item, index) => (
                <div key={index} className="product-card">
                    <div className="product-image">
                        <img src={item.searchImage}></img>
                    </div>
                    <div className="product-description">
                        <div className="product-brand">{item.brand}</div>
                        <div className="product-name" title={item.product}>{item.product}</div>
                        <div className="product-price">&#x20B9; {item.price} {item.mrp > item.price && <span className="product-price-mrp">&#x20B9; {item.mrp}</span>}</div>
                        <div className="product-offer">{item.tdBxGyText}</div>
                        <div className="product-size"><span className="label">Size </span>{item.sizes}</div>
                        <div className="product-add-cart button">Add to Cart</div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default ProductList;
