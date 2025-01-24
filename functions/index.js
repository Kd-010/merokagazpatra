const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.matchDocuments = functions.firestore
    .document("found-documents/{docId}")
    .onCreate(async (snap, context) => {
      const foundDocument = snap.data();

      try {
      // Query the lost_documents collection for a matching uniqueNumber
        const lostDocsQuery = await db.collection("lost-documents")
            .where("uniqueNumber", "==", foundDocument.uniqueNumber)
            .get();

        if (!lostDocsQuery.empty) {
          lostDocsQuery.forEach((doc) => {
            const lostDocument = doc.data();

            // Match found: Log details (or trigger notification)
            console.log("Match Found!");
            console.log("Lost Document:", lostDocument);
            console.log("Found Document:", foundDocument);

          // TODO: Add notification logic here (e.g., email, SMS, etc.)
          });
        } else {
          console.log("No match found for this document.");
        }
      } catch (error) {
        console.error("Error matching documents:", error);
      }
    });
