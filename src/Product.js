import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';
import CurrencyFormat from "react-currency-format"


function Product({id,title,price,rating,image}) {
    const [{basket},dispatch] = useStateValue();

    const addtobasket = (e) =>{
        e.preventDefault();
        //add product to cart
        dispatch({
            type : 'add_to_basket',
            item :{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            },
        }); 
    }
    
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <CurrencyFormat 
                    renderText = {(value) =>(
                        <>
                            <p className="product_price">
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
                
                <div className="product_rating">
                    <p>{Array(rating)
                        .fill()
                        .map((_,i) => (<span>⭐</span>))}</p>
                </div>
            </div>
            <img src={image} aly="product-image" alt="productimage"/>

            <button onClick = {addtobasket}>Add to Basket</button>
        </div>
    )
}

export default Product
/*<p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>     
                </p>*/