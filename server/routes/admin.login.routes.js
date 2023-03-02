const express = require("express");
const router = express.Router();
const adminLoginController = require("../controllers/admin.login.controllers");

router.post("/adminLogin", adminLoginController.adminLogin);

module.exports = router;
