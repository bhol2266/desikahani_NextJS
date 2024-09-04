


import { NextResponse } from "next/server";

//Handling POST request
export async function POST(req, res) {
    //Get the Form Data
    const Formdata = await req.formData();
    const name = Formdata.get('issueType');
    const age = Formdata.get('email');
    const city = Formdata.get('message');

   
    //Response 
    return NextResponse.json({ name, age, city })
}







const sendEmail = async (req, res) => {
    const issueType = req.body['issue-type'];
    const email = req.body.email;
    const message = req.body.message;
    const file = req.file; // File information if available



    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use true for port 465, false for other ports
        service: 'Gmail',
        auth: {
            user: 'ukdevelopers007@gmail.com',
            pass: 'yeijrvzinvcuzwuf',
        },
    });

    // Define email options
    const mailOptions = {
        to: "ukdevelopers007@gmail.com",
        subject: `Feedback Submission Hindisexstory.app: ${issueType}`,
        html: `
        <html>
            <head>
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
                        background-color: #007bff;
                        color: #ffffff;
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
                        <h1>FeedBack from hindisexstory.app</h1>
                    </div>
                    <div class="content">
                        <h2>Hello,</h2>
                        <p>A new submission has been received:</p>
                        <p><strong>Subject:</strong> ${issueType}</p>
                        <p><strong>Email for Reply:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                        ${file ? `<p><strong>Uploaded File:</strong> ${file.originalname} (${file.mimetype}, ${file.size} bytes)</p>` : '<p><strong>No file uploaded.</strong></p>'}
                        <p>If you did not request this, please ignore this email.</p>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Chutlunds. All rights reserved.</p>
                    </div>
                </div>
            </body>
        </html>`,
        // Conditionally add attachment if a file is provided
        attachments: file ? [
            {
                filename: file.originalname,
                path: file.path, // Path to the file uploaded
                contentType: file.mimetype, // MIME type of the file
            }
        ] : [],
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send({ success: false, message: 'Error sending email.' });
        }
        return res.status(200).send({ success: true, message: 'Form submitted successfully!' });
    });
};
