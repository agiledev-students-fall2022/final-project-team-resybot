import './Requests.css';
import Cart from './Cart.js'
import { useState } from 'react'
import MakeRequest from './MakeRequest';
import StandaloneRequest from './StandaloneRequest';

const Requests = () => {
    const [cartItems, setCartItems] = useState([]);
    const onAdd = () => {
        setCartItems(
            console.warn("adding element"),
            cartItems.push(<StandaloneRequest/>)
        )
    }

    return(
    <div className = "Requests">
        <h1> Requests </h1>
        <Cart cartItems = {cartItems}></Cart>
        {MakeRequest({onAdd})}
    </div>
  )}
  export default Requests;