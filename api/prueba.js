const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "justochacon98@gmail.com",
    pass: "j j y b j a t p u l m y x p w p",
  },
});

const mail = {
  from: 'justochacon98@gmail.com',
  to: `econdorir@fcpn.edu.bo`,
  subject: "Email para recuperar contraseña",
  html: `<b>Email de prueba</b>`,
};

transporter.sendMail(mail, (error, info) => {
    if (error) {
        console.log(error);
        
    }
    console.log("info", info.response);
    
});
    
