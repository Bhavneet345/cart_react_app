import React from "react";
import CartItem from "./CartItem";

// in whichever components the state resides that component only should be able to change it
const Cart = (props) => {
    return(
    <div className="cart">
        {/* <CartItem quantitiy = {1} price = {10999} title = {"watch"} img = {""}/> */}
        {props.products.map((item) => {
            // return  <CartItem quantitiy = {item.quantity} price = {item.price} title = {item.title} img = {item.img}/>
            return <CartItem 
            product = {item}
            key = {item.id}
            onIncreaseQuantity = {props.handleIncreaseQuantity}
            onDecreaseQuantity = {props.handleDecreaseQuantity}
            onDeleteProduct = {props.handleDeleteProduct}
            />
        })}
    </div>
    );
}

// const Cart = (props) => {
//     return(
//         <div className="cart">
//             {props.products.map((item) => {
//                 return <CartItem 
//                 product = {item}
//                 key = {item.id}
//                 onIncreaseQuantity = {props.handleIncreaseQuantity}
//                 onDecreaseQuantity = {props.handleDecreaseQuantity}
//                 onDeleteProduct = {props.handleDeleteProduct}
//                 />
//             })}
//         </div>
//     );
// }

export default Cart;
