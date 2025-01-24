// matchdocuments.js
import { db, messaging } from './firebase-config';

// Check if the document has a match
function checkDocumentMatch(documentNumber, lostUserId) {
    db.collection('documents')
        .where('documentNumber', '==', documentNumber)
        .where('status', '==', 'found')
        .get()
        .then(snapshot => {
            if (!snapshot.empty) {
                snapshot.forEach(doc => {
                    const foundDocument = doc.data();
                    const foundUserId = foundDocument.userId;
                    
                    // Trigger notification if match is found
                    sendNotification(lostUserId, foundUserId, documentNumber);
                });
            } else {
                console.log('No matching document found.');
            }
        })
        .catch(error => {
            console.error('Error checking document match:', error);
        });
}

// Send notification to both parties
function sendNotification(lostUserId, foundUserId, documentNumber) {
    // Assume you store device tokens for each user
    getDeviceToken(lostUserId).then(lostUserToken => {
        getDeviceToken(foundUserId).then(foundUserToken => {
            const message = {
                notification: {
                    title: 'Document Found!',
                    body: `Your document with number ${documentNumber} has been found!`
                },
                tokens: [lostUserToken, foundUserToken]
            };
            
            // Send notification
            messaging.sendMulticast(message)
                .then(response => {
                    console.log('Notification sent successfully:', response);
                })
                .catch(error => {
                    console.error('Error sending notification:', error);
                });
        });
    });
}

// Fetch user device token
function getDeviceToken(userId) {
    return db.collection('users').doc(userId).get()
        .then(doc => {
            if (doc.exists) {
                return doc.data().deviceToken; // Assuming you store the device token
            } else {
                throw new Error('User not found');
            }
        });
}

export { checkDocumentMatch };
