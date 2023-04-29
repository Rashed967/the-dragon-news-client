// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("enviorment variable", import.meta.env.VITE_PASS)
const firebaseConfig = {
    apiKey: "AIzaSyBZYYqGw7R6XrrO0bzJjTqCtRq6qmsI9wQ",
    authDomain: "the-news-dragon-client-cf330.firebaseapp.com",
    projectId: "the-news-dragon-client-cf330",
    storageBucket: "the-news-dragon-client-cf330.appspot.com",
    messagingSenderId: "211115461569",
    appId: "1:211115461569:web:fd0637c56ad381f9e43d40"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app