import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAPWE1xpiyIuA55wgHSpK3uJOhPLrPyv4s",
  authDomain: "bookurhour.firebaseapp.com",
  projectId: "bookurhour",
  storageBucket: "bookurhour.appspot.com",
  messagingSenderId: "581262812883",
  appId: "1:581262812883:web:5e044ca99ead4998ce9626",
  measurementId: "G-965CZQSTDC"
};

//initlize firebase with our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initilize firebase Db
const db = firebaseApp.firestore();

//get a var for hansling sign in
const auth = firebase.auth();
export { db, auth };
