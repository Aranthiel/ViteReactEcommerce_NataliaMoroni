// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6e-Vqo6yuIHFauhIe9t2au0Ib21fa4YI",
    authDomain: "reactvite-ecommerce-ch.firebaseapp.com",
    projectId: "reactvite-ecommerce-ch",
    storageBucket: "reactvite-ecommerce-ch.appspot.com",
    messagingSenderId: "1025775302371",
    appId: "1:1025775302371:web:98da59299fe09d780777d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
