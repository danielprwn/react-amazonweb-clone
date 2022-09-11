import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXJq0FNlZgRuK1Hiqo8jrQvCcgiEbmTwY",
  authDomain: "clone-70200.firebaseapp.com",
  databaseURL: "https://clone-70200.firebaseio.com",
  projectId: "clone-70200",
  storageBucket: "clone-70200.appspot.com",
  messagingSenderId: "58943249204",
  appId: "1:58943249204:web:e0ff352aebc1af9a70a361",
  measurementId: "G-T41FX65CM4"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
