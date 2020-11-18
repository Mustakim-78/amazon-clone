import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

function Header() {

    const [{basket,user},dispatch] = useStateValue();
    const handleSignOut = () =>{
        if(user)
            auth.signOut();
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src= {require("./amazon_PNG11.png")} alt="logo"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleSignOut} className="header_option">
                        <span className="line1">Hello &nbsp; 
                            {user ? user?.email : 'Guest'}
                        </span>
                        <span className="line2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="line1">Returns</span>
                    <span className="line2">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="line1">Your</span>
                    <span className="line2">Prime</span>
                </div>
            </div>
            
            <Link to = "/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="line2 basketCount">{basket.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
