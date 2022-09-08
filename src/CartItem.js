import React from 'react';

class CartItem extends React.Component{
    increaseQuantity(){
        console.log('testing', this.state);
        // setState form 1
        this.setState({
            quantity: this.state.quantity + 1
        });

        // setState form 2 - if prev state required use this 
        // this.setState((prevState) => {
        //     return {
        //         quantity : prevState.quantity + 1
        //     }
        // });
    }

    decreaseQuantity(){
        if(this.state.quantity === 0){
            return;
        }
        this.setState({
            quantity: this.state.quantity - 1
        });
    }

    render(){
        // console.log("this.props", this.props);
        const {price, title, quantity} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {quantity}</div>
                    <div className='cart-item-actions'>

                        {/* {Buttons} */}
                        <img 
                        alt='increase' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt='decrease' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        alt='delete' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/64/64022.png' 
                        />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 110, 
        width: 100, 
        borderRadius: 4, 
        // backgroundColor: 'gray'
    }
}

export default CartItem;