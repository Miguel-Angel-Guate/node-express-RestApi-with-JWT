const Product = require('../models/Products')
const createProducts = async (req, res) => {
    try{
        //i tried to send from postman and not show me the result
        //because i need the CORS json in app.js
        const {name, category, price, imgURL} = req.body
        const newProduct = new Product({name, category, price, imgURL})
        // console.log(req.body)
       const productSaved = await newProduct.save()
        //return to the user
        res.status(201).json(productSaved)

    } catch (err) {
        console.log(err)
    }
}

const getProducts = async(req, res) => {
try{
const getAllProducts = await Product.find()
res.status(200).json(getAllProducts)
} catch (err) {
    console.log(err)
}
// res.send('hello world')
}


const getProductsById = async(req, res) => {
try{

    const product = await Product.findById(req.params.productID)
    // console.log(productID)
    res.status(200).json(product)
}catch (err) {
    console.log(err)
}
}

const updateProductsById = (req, res) => {

}

const deleteProducstById = (req, res) => {

}

module.exports = {
createProducts,
getProducts,
getProductsById,
updateProductsById,
deleteProducstById
}