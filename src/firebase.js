import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD59pC71B3QJYeyHythOkzj9MeWSGojjHY",
    authDomain: "clone-88888.firebaseapp.com",
    projectId: "clone-88888",
    storageBucket: "clone-88888.appspot.com",
    messagingSenderId: "666543851524",
    appId: "1:666543851524:web:d60c5749c5d0ac4842cd51",
    measurementId: "G-DW39WF22ZX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };