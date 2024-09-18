const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'USE_YOUR_OWN_CREDENTIALS',
    pass: 'USE_YOUR_OWN_CREDENTIALS',
    clientId: 'USE_YOUR_OWN_CREDENTIALS',
    clientSecret: 'USE_YOUR_OWN_CREDENTIALS',
    refreshToken: 'USE_YOUR_OWN_CREDENTIALS'
  }
});

const mailConfigurations = {
  from: 'abhishekselacoti9@gmail.com',
  to: 'abhishekselacoti123@gmail.com',
  subject: 'Challenge 3 Completed',
  text: 'Name: Abhishek Selacoti\nSemester: Graduated\nBranch: Computer Engineering\nRoll Number: 101903443',
  attachments: [
    {
      path: "testimage.jpg"
    }
  ]
};

transporter.sendMail(mailConfigurations, function (error, info) {
  if (error) throw Error(error);
  console.log('Email Sent Successfully');
  console.log(info);
});
