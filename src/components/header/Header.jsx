import React from 'react'
import logo from '../../common/images/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="App-header">
            <div className="App-header-left">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/"><h1>ShopKART</h1></Link>
            </div>
            <div className="App-header-right">
                <Link to="/cart" className="button cart-button">
                    <span className="cart-icon">
                        <ShoppingCartIcon />
                    </span>
                    <span className="cart-badge">3</span>
                    <span className="cart-text">Cart</span>
                </Link>
            </div>
        </header>
    )
}

export default Header
