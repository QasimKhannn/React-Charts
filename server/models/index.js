const mongoose = require("mongoose");
const Admin = require("./admin.model");
const db = {};
db.mongoose = mongoose;
db.admin = Admin;
module.exports = db;
