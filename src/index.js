import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeGsfUnPVfnO9pWKi9UZpjLpGKopxJ50o",
  authDomain: "cart-c7e56.firebaseapp.com",
  projectId: "cart-c7e56",
  storageBucket: "cart-c7e56.appspot.com",
  messagingSenderId: "890290707344",
  appId: "1:890290707344:web:044597741f1081f4d33115"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //create instance of firebase access and export it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
