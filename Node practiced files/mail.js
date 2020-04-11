var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bruceveer@gmail.com',
    pass: '73863133000'
  }
});

var mailOptions = {
  from: 'bruceveer@gmail.com',
  to: 'veereshkali@oneteksol.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});