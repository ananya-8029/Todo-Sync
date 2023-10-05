const express = require("express");
var cors = require("cors");
const connectToMongo = require("./db");
connectToMongo();
const User = require("./models/Users");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      res.json("exist");
    } else {
      res.json("does not exist");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const newuser = {
    name: name,
    email: email,
    password: password,
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

var listener = app.listen(port, () => {
  console.log("Listening on port " + listener.address().port);
});
