// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCVFvAqoRlr8b7nkLbLhK0ex_nrZVbNpQg",
    authDomain: "news-app-67e2a.firebaseapp.com",
    projectId: "news-app-67e2a",
    storageBucket: "news-app-67e2a.appspot.com",
    messagingSenderId: "975567995101",
    appId: "1:975567995101:web:4814688932932477bc5b34"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
