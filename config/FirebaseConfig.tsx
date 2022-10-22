import Constants from 'expo-constants';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbkTJvuMEV8j91Tpd42-Mnf-IL4ZvBx6E",
  authDomain: "taskonebyvikas-91c70.firebaseapp.com",
  projectId: "taskonebyvikas-91c70",
  storageBucket: "taskonebyvikas-91c70.appspot.com",
  messagingSenderId: "67829395657",
  appId: "1:67829395657:web:9247893b13605d19845d18"
};

// Initialize Firebase
const FirebaseConfig = initializeApp(firebaseConfig);
export default FirebaseConfig;

console.log("! ! ! Firebase Initialised ! ! !", firebaseConfig);

