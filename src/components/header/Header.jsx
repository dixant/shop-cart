import { Link } from '@material-ui/core';
import React from 'react';
import logo from '../../common/images/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';
const Header = () => {
    return (

        <header className="App-header">
            <div className="App-header-left">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    ShopKART
                </h1>
            </div>
            <div className="App-header-right">
                <span className="button cart-button">
                <span className="cart-icon"><ShoppingCartIcon /></span>
                <span className="cart-badge">3</span>
                <span className="cart-text">Cart</span>
            </span>
            </div>
        </header>

    );
}

export default Header;
