// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBqojuTlD3Ygln0nrzsMqQS0lOYoMcmmsA",
    authDomain: "merokagazpatra.firebaseapp.com",
    projectId: "merokagazpatra",
    storageBucket: "merokagazpatra.appspot.com",
    messagingSenderId: "590392222492",
    appId: "1:590392222492:web:11442955788774d58f10d9",
    measurementId: "G-22XTNVP5EB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function checkMatches() {
    try {
        const lostSnapshot = await getDocs(collection(db, "lost-document"));
        const foundSnapshot = await getDocs(collection(db, "found-documents"));

        const lostDocuments = lostSnapshot.docs.map(doc => doc.data());
        const foundDocuments = foundSnapshot.docs.map(doc => doc.data());

        lostDocuments.forEach(lostDoc => {
            foundDocuments.forEach(foundDoc => {
                if (lostDoc.uniqueNumber === foundDoc.uniqueNumber) {
                    console.log(`Match Found! Lost: ${lostDoc.description}, Found: ${foundDoc.description}`);
                    alert(`Match Found: Lost (${lostDoc.description}), Found (${foundDoc.description})`);
                }
            });
        });
    } catch (error) {
        console.error("Error fetching or matching documents:", error);
    }
}
