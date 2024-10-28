const Products = require("../models/productsModel");

const addproducts = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image = req.file
        const photo = `uploads/${image.filename}`;

        const product = new Products({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: photo
        })
        await product.save()
        res.status(201).json({ message: "product added", status: "success", product })
    } catch (error) {
        console.log(error)
        res.status(505).json({ message: "internal server issue" })
    }
}


const deleteproducts = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Products.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found", status: "failure" });
        }

        res.status(200).json({ message: "Product deleted successfully", status: "success" });
    } catch (error) {

        res.status(500).json({ message: "Internal server issue", error });
    }
};

const getproducts = async (req, res) => {
    try {
        const products = await Products.find();
        if (products.length === 0) {
            return res.status(401).json({ message: "products not available" })
        }
        res.status(201).json({ message: "products fetched", data: products })

    } catch (error) {
        res.status(505).json({ message: "internal server issue", error: error })
    }
}

module.exports = { addproducts,  deleteproducts, getproducts }