// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjT22iZc62HJTnd_Qf9JF3JosNz85D_A4",
  authDomain: "linkedin-bd8f6.firebaseapp.com",
  projectId: "linkedin-bd8f6",
  storageBucket: "linkedin-bd8f6.appspot.com",
  messagingSenderId: "613449201304",
  appId: "1:613449201304:web:8ea43fddc019e4768382ed"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

