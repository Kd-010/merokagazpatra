// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqojuTlD3Ygln0nrzsMqQS0lOYoMcmmsA",
    authDomain: "merokagazpatra.firebaseapp.com",
    projectId: "merokagazpatra",
    storageBucket: "merokagazpatra.firebasestorage.app",
    messagingSenderId: "590392222492",
    appId: "1:590392222492:web:11442955788774d58f10d9",
    measurementId: "G-22XTNVP5EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
