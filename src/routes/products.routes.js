const {
    createProducts,
    getProducts,
    getProductsById,
    updateProductsById,
    deleteProductsById
} = require('../controllers/products.controllers')

const express = require('express')
const router = express.Router()
// const app = express()

router.post('/', createProducts)

router.get('/', getProducts)

router.get('/:productID', getProductsById)

router.put('/:productID', updateProductsById)

router.delete('/:productID', deleteProductsById)

module.exports = router
/* JUST CALLIN FOR PRACTICE*/
/*
router.get('/', async (req, res) => {
    try {

        res.send('get produckikkktss')
    } catch (err) {
console.log(err)
    }
})
const pk = require('../../package.json')
//guardar archivos en express para reutilizarlos luego
app.set('pakage/json', pk)

router.get('/project', async (req, res) => {
    try {
        
        res.send({
            autor: await app.get('pakage/json').name,
            description: await app.get('pakage/json').description,
            version: await app.get('pakage/json').version
        })
    } catch (err) {
        console.log(err)
    }
    
})*/
