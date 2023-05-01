// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMHr9VYkR0u6QWNGBttXt-_ZJQWURnAMw",
    authDomain: "the-news-dragon-10a92.firebaseapp.com",
    projectId: "the-news-dragon-10a92",
    storageBucket: "the-news-dragon-10a92.appspot.com",
    messagingSenderId: "651143973715",
    appId: "1:651143973715:web:d2f00641fc6ee39ee52fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;