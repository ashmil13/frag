const Product = require("../models/product");

const getProducts= async(req, res)=>{
    const products=await Product.find();
    res.json(products);
}

const addProduct= async(req, res)=>{
  
    const {name,price,salePrice,quality,description}=req.body;
    const savedProduct=await Product.create({name,price,salePrice,quality,description});
    res.status(201).json(savedProduct);
}

const deleteProduct= async(req, res)=>{
    const deletedProduct=await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
}



module.exports = {
    getProducts,
    addProduct,
    deleteProduct
};