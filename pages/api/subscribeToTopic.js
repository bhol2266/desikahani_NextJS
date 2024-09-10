// pages/api/subscribeToTopic.js
import { admin } from "./firebaseAdmin";

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { token, topic } = req.body;

        try {
            await admin.messaging().subscribeToTopic(token, topic);
            res.status(200).json({ success: true });
        } catch (error) {
            console.log(error.message);
            
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
