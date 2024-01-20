import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDqjOx9Qtmb1mhXTJruw-AA7yJRlH61cE",
  authDomain: "bmw-proyect.firebaseapp.com",
  projectId: "bmw-proyect",
  storageBucket: "bmw-proyect.appspot.com",
  messagingSenderId: "886987660784",
  appId: "1:886987660784:web:3726d0f353c0cd93329135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
