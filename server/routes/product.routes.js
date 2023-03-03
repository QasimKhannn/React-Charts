const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/product.controllers");
// const adminControllers = require("../controllers/admin.controllers");

router.get(
  "/getAllProducts",
  //   (req, res, next) => {
  //       const token = req.headers.authorization || req.headers['x-acess-token']

  //       // implement jwt verify toconfirm token if yes
  //       // if(token verified) next()
  //       // else res.status(403).send({})
  // },
  productControllers.getAllProducts
);
router.get("/getOneProduct/:id", productControllers.getOneProduct);
router.post("/addProduct", productControllers.addProduct);
router.put("/updateProduct/:id", productControllers.updateProduct);
router.delete("/deleteProduct/:id", productControllers.deleteProduct);

module.exports = router;
