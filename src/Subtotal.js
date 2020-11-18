import React from 'react'
import CurrencyFormat from "react-currency-format"
import './Subtotal.css';
import {useStateValue} from './StateProvider';
function Subtotal() {

    const [{basket}] = useStateValue();
    const v = basket.reduce((sum, i) => sum + i.price , 0);
    return (
        <div className = "subtotal">
            <CurrencyFormat 
                renderText = {(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className = "subtotal_gift">
                            <input type="checkbox" /> This Order Contains a small gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {v}
                displayType={"text"}
                thousandSeparator = {true}
                prefix = {"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
//{0/*getBasketTotal(basket)*/}