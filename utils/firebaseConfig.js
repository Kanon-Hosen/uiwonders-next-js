// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsa4TE9WuWSNEvJ7UkUIIGGQzgExBH5mk",
    authDomain: "uiwonders-70d17.firebaseapp.com",
    projectId: "uiwonders-70d17",
    storageBucket: "uiwonders-70d17.appspot.com",
    messagingSenderId: "736591374763",
    appId: "1:736591374763:web:770a31c74bd60bc73d0aee"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);