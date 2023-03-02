const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin.controllers");

router.get("/getAllAdmins", adminControllers.getAllAdmins);
router.post("/addAdmin", adminControllers.addAdmin);

module.exports = router;
