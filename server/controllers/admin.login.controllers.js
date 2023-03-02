const db = require("../models/index");
const Admin = db.admin;
// const tokenList = {}
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmins = await Admin.findOne({ email: email });
    if (!existingAdmins) {
      return res.status(404).json({ message: "Admin not found" });
    } else if (existingAdmins.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      const token = jwt.sign(
        { email: existingAdmins.email, id: existingAdmins._id },
        config.secret
      );

      res.status(201).json({
        token: token,
        user: existingAdmins,
      });
    }
  } catch (err) {
    console.log("something went wrong: " + err.message);
  }
};
