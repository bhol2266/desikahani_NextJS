import { db } from '../firebaseAdmin'; // Adjust import path as needed

async function getTotalDocumentCount() {
    const snapshot = await db.collection('Desi_Porn_Videos')
        .where('uploaded', '==', true)
        .get();

    return snapshot.size; // Returns the number of documents
}

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            // Handle any method that is not POST
            res.setHeader('Allow', ['POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }

        const { page } = req.body;
        const pageNumber = parseInt(page);


        const pageSize = 60;
        const skip = (pageNumber - 1) * pageSize;

        // Create a base query
        let query = db.collection('Desi_Porn_Videos')
            .where('uploaded', '==', true)
            .orderBy('timestamp', 'desc')
            .offset(skip)
            .limit(pageSize);


        const snapshot = await query.get();

        // Check if the query returned any documents
        if (snapshot.empty) {
            return res.status(404).json({ message: 'No videos found.' });
        }

        // Map over the documents and extract data
        const videos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        const totalDocuments = await getTotalDocumentCount();
        const totalPages = Math.ceil(totalDocuments / pageSize);
        const pagination_nav_pages = ["1", totalPages.toString()]


        res.status(200).json({ videos, pagination_nav_pages });

    } catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).json({ error: 'Error fetching videos' });
    }
}
