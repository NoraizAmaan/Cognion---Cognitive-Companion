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
  console.log("Received contact form submission:", req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: `"${req.body.name}" <${process.env.USER}>`,
    to: process.env.USER,
    replyTo: req.body.email,
    subject: `Contact Us Message from ${req.body.name}`,
    html: `<br> <strong>Name:</strong> ${req.body.name} <br> <strong>Email:</strong> ${req.body.email} <br> <strong>Message:</strong> ${req.body.message} <br> <hr>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Nodemailer Email Error:", error);
      res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
    } else {
      console.log("Email sent successfully: " + info.response);
      res.status(200).json({ success: true, message: "Mail sent successfully!" });
    }
  });
});

app.listen(4000, function () {
  console.log("App is listeing on port 4000");
});