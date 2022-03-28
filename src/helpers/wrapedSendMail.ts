import nodemailer from "nodemailer";

export async function wrapedSendMail(settings: any, mailOptions: any) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport(settings);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error is " + error);
        resolve(false); // or use rejcet(false) but then you will have to handle errors
      } else {
        console.log("Email sent: " + info.response);
        resolve(true);
      }
    });
  });
}
