import React, { useState } from 'react';
import './product.css';
import Slideshow from './Slideshow';
const Product = (props) => {
    const { item } = props;
    const [slider, setSlider] = useState();

    return (
        <div className="product-card">
            <div className="product-image">
                {!slider && <img src={item.searchImage} onMouseEnter={(e) => (setSlider(true))} onMouseLeave={(e) => setSlider(false)}></img>}
                {!!slider && <Slideshow images={item.images} setSlider={setSlider} />}
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
    );
}

export default Product;
