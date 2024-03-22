import {cart} from '../model/index.js'
import  express  from 'express';
import bodyParser from 'body-parser';
import { verifyAToken } from '../middleware/AuthenticateUser.js';

const cartRouter = express.Router()

// fetching the items
cartRouter.get('/user/:id/carts', verifyAToken, (req, res) => {
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
cartRouter.post('/user/:id/cart', bodyParser.json(), verifyAToken, (req, res) => {
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
cartRouter.patch('/user/:id/cart/:id', bodyParser.json(), verifyAToken, (req, res)=> {
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
cartRouter.delete('/user/:id/cart/:id', bodyParser.json(), verifyAToken, (req, res)=> {
    try{
        cart.deleteFromCart(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete item from cart."
        })
    }
})

// clearing the cart
cartRouter.delete('/user/:id/carts', bodyParser.json(), verifyAToken ,(req, res) => {
    try {
        cart.clearCart(req, res)
    } catch (e) {
        res.json ({
            status: res.statusCode,
            msg: "Could Not Clear Cart"
        })
    }
})

export {
    cartRouter,
    express
}


