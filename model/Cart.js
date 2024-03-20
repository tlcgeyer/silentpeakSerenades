import { connection as db } from "../config/index.js";
import {config} from "dotenv"
config();

class Cart {
    //fetching products from cart
    fetchCart(req, res) {
        try {
            const qry = `
        SELECT cartID, prodID, userID 
        from Cart
            WHERE userID = ?
        `;
            db.query(qry, [req.body.userID], (err, result) => {
               if (err) throw err;
                res.json ({
                    status: res.statusCode,
                    result,
                });
            });
        } catch (e) {
            res.json ({
                status: res.statusCode,
                msg: "Unable to fetch cart at the moment.",
            });
        }
    }
    //adding items to the cart
    addToCart(req, res) {
          const qry = `
                INSERT INTO Cart
                SET ?
            `;
        
          db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Added To Cart"
            });
        });
       
    }

    //removing stuff from the cart
    deleteFromCart(req,res) {
        const qry = `
                DELETE FROM Cart 
                WHERE orderID = ${req.params.id}
            `;
        db.query(qry, [req.body], (err) => {
           if (err) throw err;
            res.json ({
                status: res.statusCode,
                msg: "Item deleted from cart",
            });
        });
    }
    
    //clearing the cart
       async clearCart(req, res) {
        const qry = `
        DELETE FROM Cart
        WHERE userID = ?;
        `
        db.query(qry, [req.body.userID], (err) => {
            if (err) throw err;
            res.json({
                status: statusCode,
                msg: "You Have Cleared the Cart",
            });
        });
    }
}

export {
    Cart
}