const express = require("express");
var cors = require("cors");
const connectToMongo = require("./db");
connectToMongo();
const User = require("./models/Users");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const app = express();
//json web token
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Hel1loToT789HI3SWO6rldf1ullOFBEautyand%W@nders@$";
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      const passwordCompare = await bcrypt.compare(
        password,
        checkUser.password
      );
      if (!passwordCompare) {
        res.json("does not exist");
      }
      res.json("exist");
    } else {
      res.json("does not exist");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  //bcrypt is used to securely store our password
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  //secPass will be a hash value that contains the user's password and salt
  const newuser = {
    name: name,
    email: email,
    password: secPass,
  };

  try {
    const checkEmail = await User.findOne({ email: email });
    if (checkEmail) {
      res.json("exist");
    } else {
      res.json("does not exist");
      await User.insertMany([newuser]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login/forgotPassword", async (req, res) => {
  const { email } = req.body;

  try {
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      res.json("Please enter the Email from which you have signed up ");
    }
    const secret = JWT_SECRET + checkUser.password;
    //jwt will creat a token that will contain this email and id
    const token = jwt.sign(
      { email: checkUser.email, id: checkUser.id },
      secret,
      { expiresIn: "10m" }
    );

    //this link will be sent to our user
    const link = `http://localhost:3000/reset-password/${checkUser.id}/${token}`;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
      }
    });
    
    var mailOptions = {
      from: 'anaya29003@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Reset your password',
      text: link
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/reset-password/:id/:token', async (req, res)=>{
  const { id,token } = req.params;
  const checkUser = await User.findOne({_id:id});
  if(!checkUser){
    res.json("User do not exists")
  }
  const secret = JWT_SECRET + checkUser.password;
  try {
    const verify = jwt.verify(token, secret)
  } catch (error) {
    res.send("not verified")
  }
})

var listener = app.listen(port, () => {
  console.log("Listening on port " + listener.address().port);
});
