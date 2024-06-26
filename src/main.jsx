import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCJyFzbIs59gR5cdvykyt6hBAqiQBDuqdQ",
  authDomain: "ecommerce-supplement-store.firebaseapp.com",
  projectId: "ecommerce-supplement-store",
  storageBucket: "ecommerce-supplement-store.appspot.com",
  messagingSenderId: "591451329625",
  appId: "1:591451329625:web:4ae960f1f98bcc548c8d48"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
