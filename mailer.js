// 1. import nodemailer
// here nodemailer is the package that is required to be downloaded in order to send emails.
const nodemailer = require('nodemailer');

// 2. Configure email and send it.

async function sendMail(){

// 1. Create an email transporter.
// SMTP (Simple Mail Transfer Protocol)
// createTransport provides transporters which actually help in transporting emails.
const transporter = nodemailer.createTransport({
    // which service we are using if its google so gmail
    service:'gmail',
    auth:{
        // here we are setting the user mail account and password so that unauthorized users can't send any emails.
        user:'samradhisharma36@gmail.com',
        pass:'dsmkhjvivczzfxba'
    }
});

//2. Configure email content
// we can use here cc, bcc many more things
const mailOptions = {
    from: 'samradhisharma36@gmail.com',
    to: 'samradhisharma63@gmail.com',
    subject: 'Welcome to NodeJS App',
    text: 'This is an email using nodemailer in NodeJS',
};

// 3. Send the email
try{
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
}catch(err){
    console.log('Email send failer with error: '+ err);
}
}
// we should know that promises are used to handle asynchronous operations
// we wait for a promise to finish using await function
sendMail();