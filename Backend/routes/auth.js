const express = require("express");
const router = express.Router();

//Connecting to Users Schema
User = require("../models/Users");
const bcrypt = require("bcryptjs");

//json web token
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Hel1loToT789HI3SWO6rldf1ullOFBEautyand%W@nders@$";

//middleware
var fetchuser = require("../middleware/fetchuser");

const localStorage = require("localStorage");

//Route1: Creating a user using: POST: "api/auth/createuser". Sign up a new user
router.post("/createuser", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking whether the user exist or not
    const checkEmail = await User.findOne({ email: email });

    //user exist
    if (checkEmail) {
      res
        .status(400)
        .json({ error: "The user with this email already exist." });
    } else {
      // user does not exists

      //bcrypt is used to securely store our password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
      //secPass will be a hash value that contains the user's password and salt
      const newuser = await User.create({
        name: name,
        email: email,
        password: secPass,
      });

      const data = {
        newuser: {
          id: newuser.id,
        },
      };
      //creating and returning a json web token of the user created
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Intern Server Error" });
  }
});

//Route2: Authenticate a User using: POST: "api/auth/login". Checking for the right credentials.
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //checking whether the user has logged in couple of minutes ago
    const storedToken = localStorage.getItem("authToken");

    //If storedToken is true, !!storedToken evaluates to true.
    // If storedToken is false, !!storedToken evaluates to false.
    const isLoggedIn = !!storedToken;

    if (isLoggedIn) {
      // User is logged in
      console.log("User is logged in");
    } else {
      // User is not logged in
      console.log("User is not logged in");

      //checking whether user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(500)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(500)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      //creating and returning a json web token of the user logged in
      const signinToken = jwt.sign(data, JWT_SECRET);

      // Storing the token in local storage
      localStorage.setItem("authToken", signinToken);
      res.json({ signinToken });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server errr");
  }
});

//Route 3: Get logged in User Details using: POST "/api/auth/getuser".Login required
//adding a middleware to get user details:fetchuser
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
});

module.exports = router;
