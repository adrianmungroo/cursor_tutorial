// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrD7TLbaEx8Jca2_ZAvvBttwXMGpqn4nc",
  authDomain: "cursortutorial-f525a.firebaseapp.com",
  projectId: "cursortutorial-f525a",
  storageBucket: "cursortutorial-f525a.firebasestorage.app",
  messagingSenderId: "153640619073",
  appId: "1:153640619073:web:29856bc230a72a557e4ac0",
  measurementId: "G-NDWQQ46G76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);