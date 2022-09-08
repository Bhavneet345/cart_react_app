import React from "react";
import CartItem from "./CartItem";

// in whichever components the state resides that component only should be able to change it
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
    handleIncreaseQuantity = (product) => {
        console.log("Hey please increase the quantity of", product)
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].quantity += 1;
        this.setState({
            products: products
        });
    }

    handleDecreaseQuantity = (product) => {
        console.log("Hey please decrease the quantity of", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].quantity == 0){
            return;
        }
        products[index].quantity -= 1;
        this.setState({
            products: products
        });
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
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    />
                })}
            </div>
        );
    }
}

export default Cart;
