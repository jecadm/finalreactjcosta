import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRbC6FnW1Gbpexnvyh-8HSvfpCKlwjKGM",
  authDomain: "tiendamorondaga.firebaseapp.com",
  projectId: "tiendamorondaga",
  storageBucket: "tiendamorondaga.appspot.com",
  messagingSenderId: "223350697889",
  appId: "1:223350697889:web:38db0c1dd6edf7bb0565e0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);