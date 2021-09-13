const Product = require('../models/Products')
const createProducts = async (req, res) => {
    try{
        //i tried to send from postman and not show me the result
        //because i need the CORS json in app.js
        const {name, category, price, imgURL} = req.body
        const newProduct = new Product({name, category, price, imgURL})
        const productSaved = await newProduct.save()
        //return to the user
        res.status(201).json(productSaved)
        
    } catch (err) {
        console.log(err)
    }
}

const getProducts = async(req, res) => {
    try{
    console.log('hello')
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

const updateProductsById = async (req, res) => {
    const product = await Product.findOneAndUpdate(req.params.productID, req.body, {
        //mongooose automaticamente me trae los datos antiguos actualizados
        // si quiero los datos nuevos debo agregar
        new: true
    })
    
    res.status(204).json(product)

}

const deleteProductsById = async(req, res) => {
    try{
        // console.log('hello')
        // const {productID} = req.params
        const productDeleted = await Product.findOneAndRemove(req.params.productID)
        // console.log(productDeleted)
        //  await Product.findByIdAndDelete(productID)
        res.status(204).json(productDeleted)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
createProducts,
getProducts,
getProductsById,
updateProductsById,
deleteProductsById
}