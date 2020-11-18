import React from 'react'
import './CartProduct.css';
import {useStateValue} from './StateProvider';
import CurrencyFormat from "react-currency-format"

function CartProduct({id,title,price,rating,image}) {
    const [basket,dispatch] = useStateValue();

    const removefrombasket = (e) =>{
        e.preventDefault();
        //add product to cart
        dispatch({
            type : 'remove_from_basket',
            item :{
                id : id,
            },
        }); 
    }
    return (
        <div className="cart_product">
            <div className="productimg">
                <img src={image}  alt="productimage"/>
            </div>
            <div className="cart_product_info">
                <p>{title}</p>
                <CurrencyFormat 
                    renderText = {(value) =>(
                        <>
                            <p className="cart_product_price">
                                <strong>{value}</strong>
                            </p>
                        </>
                    )}
                    decimalScale = {2}
                    value = {price}
                    displayType={"text"}
                    thousandSeparator = {true}
                    prefix = {"₹"}
                />
                
                <div className="cart_product_rating">
                    <p>{Array(rating)
                        .fill()
                        .map((_,i) => (<span>⭐</span>))}</p>
                </div>
                <button onClick = {removefrombasket}>Remove from Basket</button>
            </div>
            

            
        </div>
    )
}

export default CartProduct
