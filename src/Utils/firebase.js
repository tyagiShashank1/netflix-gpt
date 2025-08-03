// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKOsJ9TwL95S26OJhSjpy5mV_XvfKd8-A",
  authDomain: "netflixgpt-825b5.firebaseapp.com",
  projectId: "netflixgpt-825b5",
  storageBucket: "netflixgpt-825b5.firebasestorage.app",
  messagingSenderId: "1033436380002",
  appId: "1:1033436380002:web:55e0755999ed53d6050a3b",
  measurementId: "G-L0N0GGSBLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);