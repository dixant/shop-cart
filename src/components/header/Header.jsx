import React, { useEffect, useState } from 'react'
import logo from '../../common/images/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    const [state, setState] = useState({
        mobileView: false,
      });
    
      const { mobileView } = state;
    
      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
      }, []);
    return (
        <header className="App-header">
            <div className="App-header-left">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/"><h1>ShopKART</h1></Link>
            </div>
            {!mobileView && <div className="App-header-center">
                <input className="header-search" placeholder="Search Products" />
                <span className="header-search-icon"><SearchIcon /></span>
            </div>}
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
