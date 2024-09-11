// pages/api/getImageData.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
  // Ensure the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extract the image URL from the request body
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'Image URL is required' });
  }

  try {
    // Fetch the image from the provided URL
    const response = await fetch(url);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    // Get the image buffer
    const buffer = await response.buffer();

    // Encode the buffer to base64
    const base64 = buffer.toString('base64');
    const mimeType = response.headers.get('Content-Type') || 'image/jpeg';

    // Send the base64-encoded image with MIME type
    res.status(200).json({ base64: `data:${mimeType};base64,${base64}` });
  } catch (error) {
    console.error('Error fetching image data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
