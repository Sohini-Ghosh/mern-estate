// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-aa2b9.firebaseapp.com",
  projectId: "mern-estate-aa2b9",
  storageBucket: "mern-estate-aa2b9.appspot.com",
  messagingSenderId: "1031093721681",
  appId: "1:1031093721681:web:9d72993ea8834efc3d7670"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);