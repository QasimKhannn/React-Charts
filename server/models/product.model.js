const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    discount: Number,
    proCode: Number,
    category: String,
    subCategory: String,
    description:String
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
