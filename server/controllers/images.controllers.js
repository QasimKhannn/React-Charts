// const Image = require("../models/Image");
const db = require("../models/index");
const Image = db.image;

exports.uploadImage = async (req, res) => {
  try {
    const image = new Image({
      image: req.file.path,
    });
    await image.save();
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
