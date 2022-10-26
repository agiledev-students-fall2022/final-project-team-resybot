import './Cart.css';
import { useState } from 'react'
import StandaloneRequest from './StandaloneRequest';

const Cart = (props) => {
    const {cartItems} = props;

    return(
    <div className = "Cart">
        <h2>testing</h2>
        <br/>
        <div>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}
        </div>
    </div>
  )}
  export default Cart;