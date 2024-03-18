import {cart} from '../model/index.js'
import { express } from 'express';
import bodyParser from 'body-parser';

const cartRouter = express.Router()

// fetching the item
cartRouter.get('/', (req, res) => {
    try{
        cart.fetchCartItems(req,res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve items.'
        })
    }
})

//add to cart
cartRouter.post('/addToCart', bodyParser.json(), (req, res) => {
    try{
        products.addToCart(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add item."
        })
    }
})
getUserIDByEmail(userEmail).then((userID)=> {
    const { productID } = req.body
    cart.addToCart({userID, productID}, res)
  }).catch((error)=>{
    console.error("Error getting userID: ", error)
    return res.status(500).json({msg: "Internal server error"})
  })

  
//removing item from the cart
cartRouter.delete('/deleteFromCart/:id', bodyParser.json(), (req, res)=> {
    try{
        products.deleteFromCart(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete item."
        })
    }
})


