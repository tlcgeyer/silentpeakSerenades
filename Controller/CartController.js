import {cart} from '../model/index.js'
import  express  from 'express';
import bodyParser from 'body-parser';
import { verifyAToken } from '../middleware/AuthenticateUser.js';

const cartRouter = express.Router()

// fetching the item
cartRouter.get('/', verifyAToken, (req, res) => {
    try{
        cart.fetchCart(req,res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve items.'
        })
    }
})

// Fetching only one item
carttRouter.get('/:id', verifyAToken, (req, res) => {
    try{
        cart.fetchCart(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve a single item."
        })
    }
})

//add to cart
cartRouter.post('/add', bodyParser.json(), verifyAToken, (req, res) => {
    try{
        cart.addToCart(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add item."
        })
    }
})

  
//deleting item from the cart
cartRouter.delete('/delete/:id', bodyParser.json(), verifyAToken, (req, res)=> {
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
cartRouter.delete('/delete', bodyParser.json(), verifyAToken ,(req, res) => {
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


