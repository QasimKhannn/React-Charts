const db = require("../models/index");
const Product = db.product;

exports.getAllProducts = (req, res) => {
  Product.find((err, prod) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable To Find Record",
      });
    }
    return res.send({
      status: "Success",
      prod: prod,
    });
  });
};

exports.getOneProduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, prod) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Find this Product",
      });
    }
    return res.send({
      status: "Success",
      prod,
    });
  });
};

exports.addProduct = async (req, res) => {
  const {
    title,
    image,
    price,
    discount,
    proCode,
    category,
    subCategory,
    description,
  } = req.body;
  const newProd = new Product({
    title,
    image,
    price,
    discount,
    proCode,
    category,
    subCategory,
    description,
  });
  newProd.save((err, newRecord) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Add Product to database",
      });
    }
    return res.send({
      status: "Success",
      data: newRecord,
    });
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(id, body);
  Product.findOneAndUpdate({ _id: id }, body, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "unable to update requested record",
      });
    }
    return res.send({
      status: "success, updated record was",
      data: record,
    });
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to Delete records",
      });
    }
    return res.send({
      status: "Deleted",
      data: record,
    });
  });
};
