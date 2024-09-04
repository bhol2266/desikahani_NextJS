
import { IncomingForm } from 'formidable';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new IncomingForm();

  // Parse the form data
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      res.status(500).json({ error: 'Error parsing form data' });
      return;
    }

    const issueType = fields['issueType'] ? fields['issueType'][0] : null;
    const email = fields['email'] ? fields['email'][0] : null;
    const messageText = fields['message'] ? fields['message'][0] : null;
    const file = files.file ? files.file[0] : null;

    const formData = {
      issueType,
      email,
      messageText,
      file,
    };


    try {
      await sendEmail(formData)
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }

  });



}


const sendEmail = async ({ issueType, email, messageText, file }) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465, false for other ports
    service: 'Gmail',
    auth: {
      user: 'ukdevelopers007@gmail.com', // Replace with your email
      pass: 'yeijrvzinvcuzwuf', // Replace with your email password
    },
  });

  // Define email options
  const mailOptions = {
    to: 'ukdevelopers007@gmail.com', // Replace with recipient email
    subject: `Feedback Submission Hindisexstory.app: ${issueType}`,
    html: `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback from hindisexstory.app</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            color: #000000;
            padding: 10px 0;
            border-radius: 8px 8px 0 0;
        }
        .content {
            margin: 20px 0;
        }
        .footer {
            font-size: 12px;
            color: #888888;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Feedback from hindisexstory.app</h1>
        </div>
        <div class="content">
            <p>A new feedback has been received:</p>
            <p><strong>Subject:</strong> ${issueType}</p>
            <p><strong>Email for Reply:</strong> ${email}</p>
            <p style="margin-top: 20px; margin-bottom: 20px;"><strong>Message:</strong> ${messageText}</p>
            
            ${file ? `<p><strong>Uploaded File:</strong> ${file.originalFilename} (${file.mimetype})</p>` : '<p><strong>No file uploaded.</strong></p>'}
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Hindisexstory. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`,
    attachments: file ? [
      {
        filename: file.originalFilename,
        path: file.filepath, // Path to the file uploaded
        contentType: file.mimetype, // MIME type of the file
      }
    ] : [],
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(info);
    });
  });
};