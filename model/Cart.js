import { connection as db } from "../config/index.js";

class Cart {
  //fetching products from cart
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
                INSERT INTO Cart (prodID, userID, prodDesc, prodURL, quantity, prodAmount) 
                VALUES (? , ?, ?, ?, ?, ?)
            `;
        
      db.query(qry, [prodID, userID, prodDesc, prodURL, quantity, prodAmount], (err) => {
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

    //removing stuff from the cart
    deleteFromCart(req, res) {
      const qry = `
                DELETE FROM Cart 
                WHERE orderID = ?
            `;
      db.query(qry, [req.params.id], (err) => {
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
        WHERE userID = ?
        `;
      db.query(qry, [req.body.userID], (err) => {
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
