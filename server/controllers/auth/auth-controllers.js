const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

// Register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    newUser.save;
    res.status(201).json({
      success: true,
      message: "Resgistration is successful",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "some error occured",
    });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    res.status(201).json("");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "some error occured",
    });
  }
};


module.exports = {registerUser}