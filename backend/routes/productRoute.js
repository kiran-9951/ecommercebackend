
const express =require("express");
const router =express.Router();
const productController =require("../controllers/productsController")
const upload =require("../middlewares/multerupload")
const {verifyToken,restrict} =require("../middlewares/authorization")
router.post("/addproducts",upload.single("image"),productController.addproducts)
router.get("/allproducts",productController.getproducts)
router.delete("/delete/:id",productController.deleteproducts)

module.exports =router