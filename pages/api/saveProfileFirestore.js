// pages/api/auth/saveProfileFirestore.js
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK directly with the service account key
const serviceAccount = {
    "type": "service_account",
    "project_id": "desikahaninextjs-ffab3",
    "private_key_id": "0c6477c2660e6115e81181bf3c3a83a8c86b5be1",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDL2PCGeDPIFRWV\n2Mm7dg/8veK0y2mmWDQBM0veaAZbJ/sBmveprmPTiIPt3la0+jl/vexzGYwJQGQu\nQldAHa5KDbyXMGLeU+Em9l1u2nHxWlDUeYwZJGzk6v6W8WXHA78+xDJtkEsuddqZ\nj8yPFfXseiYegp8i2f2wtJzcFgqR7mu/eKobBNeXduTh8JUVU37d0Lfd4kbMP60E\nVj+9A2ZoQ5BvWGTQo+HL1usbYe4EDRFvfHEL2AP01bia8XCrAFHn2SIEz8ISAB6z\nR9AfGZOhQSJxgvKPygPdeim+mkpo/P1wgKidNHAYxqXd5haome4tqGQRgeNpjhlo\n2q0G1aZPAgMBAAECggEAFxrvewkUMsvpAW4Wwjp0lMeKcxxR96UsZ9fCSWLtwtak\n8HP55HARfUA5AUo1S8LHp6oFq1osRumB3BhwPqKJRyLddcmUkJyzUDDr5Y0PDeCY\neYI5a1Qh9PnfLN65vuAML6IaESnMy7xXWxaIhM4OwjoU01p84ny7m5QtP2j5fmbI\nTnnI0KJueMBYNbOgLGa3i3hf3hsGTIkQNiMERXHECe0OgV2ShYH/5dwGd4JCqPDs\nqxZ0uyAxfhHR9jXjDZ537Qky0llZyUGPhru68w3HKLzfcWD9lRS7PLPYDNS/CeTS\n2qbgSY5cmOWCa/oe5qYhIYR31pUlQDd7SOP4E5F86QKBgQDxjZanc3fwZqk968kC\nqBbnx3l3KxEk/qo9EuccYfoWI813cybnJOO3sQxYel4B/kR+Xr5Wo5cLc9bszZmk\ngbaQRhZi1GddIz0Nz3HLLE7sv3Nin2lbZF3k5ih4MEpzChooTJ0eQJl5ua6EbAh3\nW5+OfJ5USGdB2iKZWhgSDdBZ+wKBgQDYCgp4kjuFiklCcaPQaZ8zfsnUUeZzUocz\nkbNWTGlVMdkjzaeTRrYQfgX8klrpTfldMyqe60WaFCPXpQzDY+zw8XUBB0DiSW7H\nITpln6GTmYLvqFy8jyKLMsOuehnO8JB8rmFpYKk5gd0HGTtpKvZcWXAGPNd1KOz+\nWbUqg5wovQKBgGEzXKBdcrImXYwxSV3sTetO9a3igq+kWtTgumdNddla5t9eUxVI\nXuoYMKOZ+iJLMzy221j501okbyQzR9RO7iv4SCHU3xM3juXzyBK97bSPBdt10muY\nY8AsbbSPmiXYttXonoEB9cBp27Ql1PJSyE4KD5xS1lpFcQ7MlksNi/3pAoGBAK/Y\nfG1nmcs4pCjRFuWtE0h3CxEnGM0Ff8cZ8T9tMs+Fo5jg7GWUSN1jtru+5QDB1xdl\nbmusVRr1CbedQKZJz7LO1s3feZC29NRg14egR4Q8j7dC8zkHyLZEu8Jo4FjwtqrF\nxcRgSV3ltmLwxsrzjVPd+LEbFMToav8dRbk1JwaBAoGBAIA692pkz7dVoOsKw5wU\nRNFAvOLuw33/mNREm8IIlx1ddLIKCMpalgb0rYv2CZcfDm1w6V9YVVE6cg1piPOi\n+kE3ihc5up7pj7AGZ9v/ieOsmOoNx+qw1wHo85ImXMQxxmLXa9yDi+buLYfniJll\n5TCK6n7D5joVnXwFwI9nAHMY\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-3cctd@desikahaninextjs-ffab3.iam.gserviceaccount.com",
    "client_id": "114079090453436989392",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3cctd%40desikahaninextjs-ffab3.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        // Optionally, specify the database URL if needed
        // databaseURL: "https://your-project-id.firebaseio.com",
    });
}

const db = admin.firestore();

export async function saveUserProfile(firstName, lastName, email, profilePic, hashpass, verified, country, loggedIn, membership, keywords) {
    const data = {
        firstName,
        lastName,
        email,
        profilePic,
        hashpass,
        verified,
        country,
        loggedIn,
        membership,
        keywords,
        timestamp: admin.firestore.Timestamp.now() // Use Firestore's Timestamp
    };

    const documentId = email; // Ensure email is unique and valid for Firestore document ID

    try {
        const docRef = db.collection("Users").doc(documentId);
        await docRef.set(data);
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
        throw error; // Propagate error to be handled by caller
    }
}

export async function getUserByEmail(email) {
    try {
        const docRef = db.collection("Users").doc(email);
        const doc = await docRef.get();

        if (doc.exists) {
            return doc.data(); // Return the user data if the document exists
        } else {
            return null; // Return null if the document does not exist
        }
    } catch (error) {
        console.error("Error retrieving user data: ", error);
        throw error; // Propagate error to be handled by caller
    }
}

export async function checkUserExists(email) {
    try {
        const docRef = db.collection("Users").doc(email);
        const doc = await docRef.get();
        return doc.exists; // Returns true if the document exists, false otherwise
    } catch (error) {
        console.error("Error checking user existence: ", error);
        throw error; // Propagate error to be handled by caller
    }
}

export async function updateLoggedIn(email, loggedInStatus) {
    try {
        const docRef = db.collection("Users").doc(email);
        await docRef.update({ loggedIn: loggedInStatus });
        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
        throw error; // Propagate error to be handled by caller
    }
}

export async function updateVerify(email, verifiedStatus) {
    try {
        const docRef = db.collection("Users").doc(email);
        await docRef.update({ verified: verifiedStatus });
        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
        throw error; // Propagate error to be handled by caller
    }
}

export async function updatepassword(email, password) {
    try {
        const docRef = db.collection("Users").doc(email);
        await docRef.update({ hashpass: password });
        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
        throw error; // Propagate error to be handled by caller
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { displayName, email, photoURL } = req.body;

            await saveUserProfile(displayName, "", email, photoURL, "", true, "", true, false, []);

            res.status(200).json({ message: 'Profile saved successfully' });
        } catch (error) {
            console.error('Error saving profile:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}