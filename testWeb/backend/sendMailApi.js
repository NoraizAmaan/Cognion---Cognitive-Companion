const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Send Mail.");
});

app.post("/mail", function (req, res) {
  res.send("Mail sended");

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: `${process.env.USER}`,
    to: `${process.env.USER}`,
    subject: `${req.body.name}`,
    html: `<br> <strong>Name: ${req.body.name}</strong> <br> <strong>Email: ${req.body.email}</strong> <br> <strong>Message: ${req.body.message}</strong> <br> <hr>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(4000, function () {
  console.log("App is listeing on port 4000");
});