import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {
  doc,
  setDoc,
  collection,
  addDoc, 
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy
} from "firebase/firestore";
import { db } from "./index";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      products : [
        // {
        //   price: 2999, 
        //   title: 'shoe', 
        //   quantity: 1, 
        //   img: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', 
        //   id: 1
        // }, 
        // {
        //   price: 10999, 
        //   title: 'iPhone', 
        //   quantity: 1, 
        //   img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80', 
        //   id: 2
        // },
        // {
        //   price: 1999, 
        //   title: 'watch', 
        //   quantity: 1, 
        //   img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', 
        //   id: 3

        // }
     ], 
     loading: true 
    }
  }

  async componentDidMount(){
     //this is a realtime listener if you change anything in firebase ui will automatically updated 
     const q = query(
      collection(db, "products"),
      where("price", ">", 0),
      orderBy("price")
    );
    const unsub = await onSnapshot(q, (querySnapshot) => {
      const getProducts = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        getProducts.push(product);
      });
      console.log(getProducts);
      this.setState({ products: getProducts, loading: false });
    });
  }
  
  handleIncreaseQuantity = async (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].quantity += 1;
    // this.setState({
    //   products: products
    // });

    const docRef = doc(collection(db, "products"), products[index].id);
    await updateDoc(docRef, {
      quantity: products[index].quantity + 1,
    });

  }
  
  handleDecreaseQuantity = async (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].quantity == 0){
      return;
    }

    // products[index].quantity -= 1;
    // this.setState({
    //   products: products
    // });

    const docRef = doc(collection(db, "products"), products[index].id);
    await updateDoc(docRef, {
      quantity: products[index].quantity - 1,
    });

  }
  
  handleDeleteProduct = (product) => {
    // console.log("delete the product", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    // products.splice(index, 1);
    // this.setState({
    //   products: products
    // });
    
    const docRef = doc(collection(db, "products"), products[index].id);
    deleteDoc(docRef)
    .then(() => {
        console.log("product deleted");
    })
    .catch((error) => {
        console.log(error);
    });
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach(function(product){
      count += product.quantity
    });
    return count;
  }

  getTotalPrice = () => {
    const {products} = this.state;
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += (product.quantity * product.price);
    });
    return totalPrice;
  }

  addProduct = () => {
       //Get the User Collection Reference, In collection we pass the db instance of firebase
       const usersCollectionRef = collection(db, "products");

       //Now we are using the addDoc function of FireStore, to store our new Document. We pass UserCollectionRef to the addDoc function
       addDoc(usersCollectionRef, {
         img: '',
         price: 900,
         quantity: 3, 
         title: 'Washing Machine'
       }).then((docRef) => {
         //On Successful adding of data, we console log the data
         console.log("Product has been added", docRef);
       }).catch((err) => {
         //On failure, we print the error in console.
         console.log("Error in Adding Product", err);
       });
  }

  render(){
    const {products} = this.state;
    return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style = {{padding: 20, fontSize: 20}}>Add a product</button> */}
      <Cart products = {products} handleIncreaseQuantity = {this.handleIncreaseQuantity} handleDecreaseQuantity = {this.handleDecreaseQuantity}
      handleDeleteProduct = {this.handleDeleteProduct} />
      <div>
        TOTAL: {this.getTotalPrice()}
      </div>
    </div>
    );
  }
}

export default App;

