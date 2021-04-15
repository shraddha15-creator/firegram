 import firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCWfd-y-cVAy3NhTc98Gn-nvAGRkAoNyy0",
    authDomain: "firegram-dd4a8.firebaseapp.com",
    projectId: "firegram-dd4a8",
    storageBucket: "firegram-dd4a8.appspot.com",
    messagingSenderId: "827349665420",
    appId: "1:827349665420:web:eaa42b71502079828f5da9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };