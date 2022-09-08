import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
            products : [
                {
                    price: 999, 
                    title: 'brush', 
                    quantity: 1, 
                    img: '', 
                    id: 1
                }, 
                {
                    price: 10999, 
                    title: 'phone', 
                    quantity: 1, 
                    img: '', 
                    id: 2
                },
                {
                    price: 1999, 
                    title: 'watch', 
                    quantity: 1, 
                    img: '', 
                    id: 3
                }
            ] 
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {/* <CartItem quantitiy = {1} price = {10999} title = {"watch"} img = {""}/> */}
                {products.map((item) => {
                    // return  <CartItem quantitiy = {item.quantity} price = {item.price} title = {item.title} img = {item.img}/>
                    return <CartItem 
                    product = {item} 
                    key = {item.id}
                    />
                })}
            </div>
        );
    }
}

export default Cart;