// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7rsRAQQ6NOKcS4FhVA8ZtKCSXQ6ZC6LE",
  authDomain: "dragon-news-6e70c.firebaseapp.com",
  projectId: "dragon-news-6e70c",
  storageBucket: "dragon-news-6e70c.firebasestorage.app",
  messagingSenderId: "302769970182",
  appId: "1:302769970182:web:1b42384f9943124c7b3787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);