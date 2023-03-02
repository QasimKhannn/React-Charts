const db = require("../models/index");
const Admin = db.admin;

exports.getAllAdmins = (req, res) => {
  Admin.find((err, data) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to get any Admins",
      });
    } else {
      return res.status(200).send({
        status: "Success",
        message: "Here are the Admins",
        data: data,
      });
    }
  });
};
exports.addAdmin = (req, res) => {
  const { email, password } = req.body;
  const admin = new Admin({
    email,
    password,
  });
  admin.save((err, newAdmin) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Failed to Give Feedback",
      });
    } else {
      return res.status(200).send({
        status: "Success",
        newAdmin,
      });
    }
  });
};
