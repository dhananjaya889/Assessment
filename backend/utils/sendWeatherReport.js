const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendWeatherReport = (email, weatherReportHTML) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Weather Report',
    html: `
      <html>
      <body>
        <h2>Here is the weather report:</h2>
        ${weatherReportHTML}
      </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendWeatherReport };
