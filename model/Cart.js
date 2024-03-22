import { connection as db } from "../config/index.js";

class Cart {
  //fetching products from cart
      fetchCarts(req, res){
        const qry = `
            SELECT cartID, prodID, userID, quantity, prodAmount
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
            SELECT cartID, prodID, userID, quantity, prodAmount
            FROM Cart
            WHERE cartID = ${req.params.id};
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
      const data = req.body;
      const qry = `
                INSERT INTO Cart (userID, prodID,quantity, prodAmount)
                VALUES (?, ?, ?, ?,?);
            `;
        
      db.query(qry, [data.userID, data.prodID, data.quantity, data.prodAmount], (err) => {
        if (err)  throw err;
        res.json({
          status: res.statusCode,
          msg: "Successfully added cart!"
        });
      });
       
    }

    //update stuff in the cart
    updateCart(req, res) {
      const data = req.body;
      const qry = `
      UPDATE Cart
      SET userID = ? , prodID = ? , quantity = ? , prodAmount = ?, 
      WHERE cartID = ${req.params.id};
      `
      db.query(qry, [data.userID, data.prodID, data.quantity, data.prodAmount ], (err) => {
        if (err) throw err;
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
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: "Item deleted from cart",
        });
      });
    }
    
  }
export {
    Cart
}
