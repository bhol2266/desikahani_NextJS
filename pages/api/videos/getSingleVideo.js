import { db } from '../firebaseAdmin'; // Adjust import path as needed

export async function getDocumentById(id) {
    try {
        const docRef = db.collection('Desi_Porn_Videos').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error('Document not found');
        }

        return { id: doc.id, ...doc.data() };
    } catch (error) {
        console.error('Error fetching document:', error);
        throw error;
    }
}

export async function getRelatedVideos(tags) {
    try {
        // Fetch videos with any of the tags
        const videosSnapshot = await db.collection('Desi_Porn_Videos')
            .where('tags', 'array-contains-any', tags)
            .get();

        const videos = videosSnapshot.docs.map(doc => {
            const data = doc.data();
            const videoTags = data.tags || [];
            const matchCount = tags.filter(tag => videoTags.includes(tag)).length;
            return { id: doc.id, ...data, matchCount };
        });

        // Sort videos by the number of matching tags in descending order
        const sortedVideos = videos.sort((a, b) => b.matchCount - a.matchCount);
        const limitedVideos = sortedVideos.slice(0, 60);
        return limitedVideos;

    } catch (error) {
        console.error('Error fetching document:', error);
        throw error;
    }
}

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            // Handle any method that is not POST
            res.setHeader('Allow', ['POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
        // https://pub-46cdeefeaf774247ab99232ab1ebaa66.r2.dev/DesiPornVideos/FullVideo/12-inch-vegetable-cucumber-fucking-big-pussy-hole.mp4
        const { id } = req.body;
        let document = await getDocumentById(id);
        document.videoSrc = `https://pub-46cdeefeaf774247ab99232ab1ebaa66.r2.dev/DesiPornVideos/FullVideo/${document.id}.mp4`;


        const relatetdVideos = await getRelatedVideos(document.tags);

        res.status(200).json({ video_details: document, relatetdVideos: relatetdVideos });

    } catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).json({ error: 'Error fetching videos' });
    }
}
