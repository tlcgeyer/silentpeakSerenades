import { connection as db } from "../config/index.js";

class Cart {
  //fetching products from cart
      fetchCarts(req, res){
        const qry = `
            SELECT cartID, prodID, userID, prodDesc, quantity, prodAmount
            FROM Cart;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
 
      fetchCart(req, res){
        const qry = `
            SELECT cartID, prodID, userID, prodDesc, quantity, prodAmount
            FROM Cart;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
 
  
    //adding items to the cart
    addToCart(req, res) {
      const qry = `
                INSERT INTO Cart 
                SET ?;
            `;
        
      db.query(qry, [req.body], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            status: res.statusCode,
            msg: "Failed to add item to cart."
          });
        }
        res.json({
          status: res.statusCode,
          msg: "Added To Cart"
        });
      });
       
    }

    //update stuff in the cart
    updateCart(req, res) {
      const qry = `
      UPDATE Cart
      SET?
      WHERE cartID = ${req.params.id};
      `
      db.query(qry, [req.body], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            status: res.statusCode,
            msg: "Failed to update item in cart."
          });
        }
        res.json({
          status: res.statusCode,
          msg: "Successfully updated in Cart"
        });
      });
       
    }

    //removing stuff from the cart
    deleteFromCart(req, res) {
      const qry = `
                DELETE FROM Cart 
                WHERE cartID = ${req.params.id};
            `
      db.query(qry, [req.body], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            status: res.statusCode,
            msg: "Failed to delete item from cart."
          });
        }
        res.json({
          status: res.statusCode,
          msg: "Item deleted from cart",
        });
      });
    }
    
    //clearing the cart
       clearCart(req, res) {
      const qry = `
        DELETE FROM Cart
        WHERE cartID = ?
        `;
      db.query(qry, [req.body.cartID], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            status: res.statusCode,
            msg: "Failed to clear the cart."
          });
        }
        res.json({
          status: res.statusCode,
          msg: "Cart successfully cleared!",
        });
      });
    }
  }


export {
    Cart
}
