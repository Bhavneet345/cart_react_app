import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBeGsfUnPVfnO9pWKi9UZpjLpGKopxJ50o",
    authDomain: "cart-c7e56.firebaseapp.com",
    projectId: "cart-c7e56",
    storageBucket: "cart-c7e56.appspot.com",
    messagingSenderId: "890290707344",
    appId: "1:890290707344:web:044597741f1081f4d33115"
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database()
 
