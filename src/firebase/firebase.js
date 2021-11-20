import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAN7mOgA6GKqj7LWpSdixf-Mf4QzCyyIdM",
  authDomain: "ecomerce-coderhouse.firebaseapp.com",
  projectId: "ecomerce-coderhouse",
  storageBucket: "ecomerce-coderhouse.appspot.com",
  messagingSenderId: "766357322002",
  appId: "1:766357322002:web:afbb3471d0df9910259bcb"
};

const app = firebase.initializeApp( firebaseConfig );

export const firestore = firebase.firestore(app);
