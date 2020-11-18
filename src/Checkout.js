import React from 'react';
import Subtotal from './Subtotal.js'
import './Checkout.css';
import CartProduct from './CartProduct'
import {useStateValue} from './StateProvider';


function Checkout() {
    const [{basket}] = useStateValue();    
    return (
        <div className = "checkout"> 
            <div className = "checkout_left">
                <img src = {require('./blue.jpg')} alt="cover"/>
                <div className = "checkout_title">
                    <h2>Your Shopping Basket</h2>
                    {basket.map((p) =>
                        <CartProduct
                            id = {p.id}
                            title = {p.title}
                            price = {p.price}
                            rating = {p.rating}
                            image = {p.image} />
                    )}
                </div>
            </div>
            <div className = "checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout