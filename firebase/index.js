import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyD5uKGYqMDZTRnBtht6lyaW74b0ynaDwM0",
  authDomain: "todo-app-a54c1.firebaseapp.com",
  projectId: "todo-app-a54c1",
  storageBucket: "todo-app-a54c1.appspot.com",
  messagingSenderId: "730868361606",
  appId: "1:730868361606:web:d2daa8057d0f90c3e82407"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database(); 

export default firebase;