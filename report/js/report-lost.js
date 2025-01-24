// js/report-lost.js
import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

document.getElementById("lostForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const documentType = document.getElementById("documentType").value;
    const uniqueNumber = document.getElementById("uniqueNumber").value;
    const description = document.getElementById("description").value;
    const dateLost = document.getElementById("dateLost").value;
    const locationLost = document.getElementById("locationLost").value;
    const contactInfo = document.getElementById("contactInfo").value || null;
    const additionalComments = document.getElementById("additionalComments").value || null;

    try {
        await addDoc(collection(db, "lost-documents"), {
            documentType,
            uniqueNumber,
            description,
            dateLost,
            locationLost,
            contactInfo,
            additionalComments,
            timestamp: new Date(),
        });
        alert("Document reported as lost successfully!");
        e.target.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to report the lost document. Please try again.");
    }
});
