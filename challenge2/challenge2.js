const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // Kindly copy paste a code which has been sent over mail and then run the program
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
