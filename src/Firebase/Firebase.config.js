// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYjL2szHAeTo6bS4ime1FY1aEAwZnpJeA",
  authDomain: "teeth-wizard-auth-8fd6a.firebaseapp.com",
  projectId: "teeth-wizard-auth-8fd6a",
  storageBucket: "teeth-wizard-auth-8fd6a.firebasestorage.app",
  messagingSenderId: "274928646185",
  appId: "1:274928646185:web:efd040723102bc23aa0438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;