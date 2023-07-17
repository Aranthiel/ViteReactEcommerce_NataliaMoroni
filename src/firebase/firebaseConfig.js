// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBUIOiy6m-2KHg__JRjr5I3opME4YFvwYo",
    authDomain: "ch-ecommerce-jsonexport.firebaseapp.com",
    projectId: "ch-ecommerce-jsonexport",
    storageBucket: "ch-ecommerce-jsonexport.appspot.com",
    messagingSenderId: "114413142900",
    appId: "1:114413142900:web:0e57fe85769b4ab40e6221"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
