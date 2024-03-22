import {cart} from '../model/index.js'
import  express  from 'express';
import bodyParser from 'body-parser';
import { verifyAToken } from '../middleware/AuthenticateUser.js';

const cartRouter = express.Router()

// fetching the items from the cart
cartRouter.get('/', verifyAToken, (req, res) => {
    try{
        cart.fetchCarts(req,res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve items from cart.'
        })
    }
})

// fetching only one item from the cart
cartRouter.get('/:id', verifyAToken, (req, res) => {
    try{
        cart.fetchCart(req,res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve item from cart.'
        })
    }
})

//adding items to cart
cartRouter.post('/addToCart', bodyParser.json(), verifyAToken, (req, res) => {
    try{
        cart.addToCart(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add item to cart."
        })
    }
})

// updating items in the cart
cartRouter.patch('/updateCart/:id', bodyParser.json(), verifyAToken, (req, res)=> {
    try{
        cart.updateCart(req,res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update item in cart."
        })
    }
})

//deleting item from the cart
cartRouter.delete('/deleteCart/:id', bodyParser.json(), verifyAToken, (req, res)=> {
    try{
        cart.deleteCart(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete item from cart."
        })
    }
})


export {
    cartRouter,
    express
}


