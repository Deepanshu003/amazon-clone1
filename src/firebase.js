import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDkfd78F2W1mQOlV5didqwwwoscuO_L4WA",
  authDomain: "clone-e1845.firebaseapp.com",
  projectId: "clone-e1845",
  storageBucket: "clone-e1845.appspot.com",
  messagingSenderId: "1076998624239",
  appId: "1:1076998624239:web:9774fcfe36cc8663089c1a",
  measurementId: "G-WB5PG5920T"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
