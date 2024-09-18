const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'abhishekselacoti9@gmail.com',
    pass: 'ya29.a0AcM612xu6Tr1fpGyzSyA6Lub1KLHFIBmI_0yUcIsQbrPB_kE3pFw9m4lI8p2PCf88SgaTfVsXAxzWeA9KX_mdAOf-KYb02cchRD1Ulf4wGeGEMQttk2xQhSmbZ8aXLlQQcldvg49ZvalhbA6J1G6WpJsYTcgJpIehxXoNpnYaCgYKAacSARMSFQHGX2Migx7UnsSBmW3ZVDZn1AIYAA0175',
    clientId: '267515917616-o1ibscnks1h8av0mosbj7mt2ut69p60k.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04xSm8w6fj-9YCgYIARAAGAQSNwF-L9Ir04KtAaUBPOhXOeIPDUX1VfIyd7kRq-lDmL46BHvS7ZAH39R_K29_FHKb7HXg_RS9s_g'


    // Kindly uncomment and add your credentials to run the code
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
