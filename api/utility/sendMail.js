import nodemailer from "nodemailer";

// Account Activate Mail to user
export const sendAccountActivateMail = async (to, data) => {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ID, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Instagram Pro" <${process.env.MAIL_ID}>`, // sender address
      to: to, // list of receivers
      subject: "verify your account", // Subject line
      html: `<h4>Hello World! ${data.code}</h4>
      <a href="${data.link}"><button>Activate account</button></a>
      
      `,
    });
  } catch (error) {
    console.log(error);
  }
};
