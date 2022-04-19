import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAKZZIzbVrOojxcnAdA2JvIK9ngnj9Eg-0",
    authDomain: "e-ride-264ac.firebaseapp.com",
    projectId: "e-ride-264ac",
    storageBucket: "e-ride-264ac.appspot.com",
    messagingSenderId: "27605630874",
    appId: "1:27605630874:web:79f2bdab515237c2aa4423"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
