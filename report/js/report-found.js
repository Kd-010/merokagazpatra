// js/report-found.js
import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

document.getElementById("foundForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form data
    const documentType = document.getElementById("documentType").value;
    const uniqueNumber = document.getElementById("uniqueNumber").value;
    const description = document.getElementById("description").value;
    const dateFound = document.getElementById("dateFound").value;
    const locationFound = document.getElementById("locationFound").value;
    const contactInfo = document.getElementById("contactInfo").value || null;
    const additionalComments = document.getElementById("additionalComments").value || null;

    try {
        // Add data to Firestore
        await addDoc(collection(db, "found-documents"), {
            documentType,
            uniqueNumber,
            description,
            dateFound,
            locationFound,
            contactInfo,
            additionalComments,
            timestamp: new Date(),
        });
        alert("Document reported successfully!");
        e.target.reset(); // Reset the form
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to report the document. Please try again.");
    }
});
