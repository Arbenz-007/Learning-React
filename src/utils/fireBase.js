// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDspwx25WrYb3rieIUBQzLYpN6Lsif0Y6A",
  authDomain: "foodiebuddy-fedbd.firebaseapp.com",
  projectId: "foodiebuddy-fedbd",
  storageBucket: "foodiebuddy-fedbd.firebasestorage.app",
  messagingSenderId: "356755088635",
  appId: "1:356755088635:web:df69019b2b6bcb2c7e7c5e",
  measurementId: "G-Z5DS7S7EGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();