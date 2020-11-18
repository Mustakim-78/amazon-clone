import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDtBv0hE3oZpRoxp8bPxPzKAeKrwEPRQwQ",
    authDomain: "clone-e4b19.firebaseapp.com",
    databaseURL: "https://clone-e4b19.firebaseio.com",
    projectId: "clone-e4b19",
    storageBucket: "clone-e4b19.appspot.com",
    messagingSenderId: "348178660366",
    appId: "1:348178660366:web:36d47b8e0ae6481b1c505f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};