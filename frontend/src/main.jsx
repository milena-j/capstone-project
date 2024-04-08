import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import 'bootstrap/dist/js/bootstrap.min.js'; */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4HiyeFurFfXhEunBm2LTRojUoHC9xlZQ",
  authDomain: "gestionale-mattatoyo.firebaseapp.com",
  projectId: "gestionale-mattatoyo",
  storageBucket: "gestionale-mattatoyo.appspot.com",
  messagingSenderId: "822298978395",
  appId: "1:822298978395:web:cb03fc69e2cb76cf4e777e",
  measurementId: "G-DKSV87LTGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App app={app} analytics={analytics} />
  </React.StrictMode>,
)