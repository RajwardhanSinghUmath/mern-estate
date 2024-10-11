// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-991b0.firebaseapp.com",
  projectId: "mern-estate-991b0",
  storageBucket: "mern-estate-991b0.appspot.com",
  messagingSenderId: "727679049033",
  appId: "1:727679049033:web:c96633b14dfbda365c0e98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);