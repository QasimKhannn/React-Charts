const mongoose = require("mongoose");
const Admin = require("./admin.model");
const Product = require("./product.model");
const db = {};
db.mongoose = mongoose;
db.admin = Admin;
db.product = Product;
module.exports = db;
