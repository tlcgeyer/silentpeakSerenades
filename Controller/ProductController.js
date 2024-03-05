import bodyParser from 'body-parser';
import express from 'express';
import {products} from "../model/index.js";


const productRouter = express.Router()

// Fetching all items
productRouter.get('/', (req, res) => {
    try{
        products.fetchProducts(req,res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve items.'
        })
    }
})

// Fetching only one item
productRouter.get('/:id', (req, res) => {
    try{
        products.fetchProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve a single item."
        })
    }
})

//Adding a item 
productRouter.post('/addProduct', bodyParser.json(), (req, res) => {
    try{
        products.addProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add item."
        })
    }
} )

export {
    productRouter, express
}