import React from "react";

import ReactDOM from "react-dom";
import "./estilos.scss";

import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRbC6FnW1Gbpexnvyh-8HSvfpCKlwjKGM",
  authDomain: "tiendamorondaga.firebaseapp.com",
  projectId: "tiendamorondaga",
  storageBucket: "tiendamorondaga.appspot.com",
  messagingSenderId: "223350697889",
  appId: "1:223350697889:web:38db0c1dd6edf7bb0565e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
