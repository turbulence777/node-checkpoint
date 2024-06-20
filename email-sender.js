// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Define the email options
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from a Node.js script!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
