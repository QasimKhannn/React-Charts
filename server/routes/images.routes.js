const express = require("express");
const router = express.Router();
const multer = require("multer");
const ImageController = require("../controllers/images.controllers");

const upload = multer({ dest: "uploads/" });

router.post("/image", upload.single("image"), ImageController.uploadImage);

module.exports = router;
