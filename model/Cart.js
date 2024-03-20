import { connection as db } from "../config/index.js";

class Cart {
    //fetching products from cart
    fetchCart(req, res) {
        try {
            const qry = `
        SELECT cartID, prodID, userID, prodDesc, prodURL, quantity, prodAmount 
        from Cart
            WHERE userID = ?
        `;
            db.query(qry, [req.body.userID], (err, result) => {
                if (err) {
        console.error(err);
        return res.status(500).json({
          status: res.statusCode,
          msg: "Failed to retrieve cart items."
        });
      }catch(e) {
             res.json ({
        status: res.statusCode,
        result,
      });
    });    
      }
  }

    //adding items to the cart
    addToCart({prodID, userID, prodDesc, prodURL, quantity, prodAmount}) {
          const qry = `
                INSERT INTO Cart (prodID, userID, prodDesc, prodURL, quantity, prodAmount) 
                VALUES (? , ?)

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
    deleteFromCart(req,res) {
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
