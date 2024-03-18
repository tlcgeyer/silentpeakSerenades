import { connection as db} from "../config/index.js";

class Cart {
    //fetching products from cart
    fetchCartItems(userID, res) {
        const query = `
        SELECT cartID, prodID, userID 
        from Cart WHERE userID = ?
        `;
        db.query(query, [userID], (err, results) => {
            if (!err) {
              res.json({
                status: res.statusCode,
                results,
              });
            } else {
              throw (
                err &&
                res.json({
                  status: res.statusCode,
                  err,
                  msg: "An error has occurred",
                })
              );
            }
          });
        }

    //adding items to the cart
    addToCart({ userID, productID }, res) {
        try {
          const query = `
                INSERT INTO Cart (userID, productID) VALUES(?,?)
            `;
          const data = [userID, productID];
          db.query(query, data, (err) => {
            if (!err) {
              res.json({
                status: res.statusCode,
                msg: "Product added to cart successfully",
              });
            } else {
              throw (
                err &&
                res.json({
                  status: res.statusCode,
                  msg: "Something went wrong",
                  err,
                })
              );
            }
          });
        } catch (e) {
          console.error(e);
          res
            .status(500)
            .json({ status: res.statusCode, msg: "Internal server error", err: e });
        }
    }

    //removing stuff from the cart
    deleteFromCart(userID, productID, res) {
        const qry = `
                DELETE FROM Cart 
                WHERE userID = ? AND productID = ?
            `;
        const data = [userID, productID];
        db.query(qry, data, (err) => {
          if (!err) {
            res.json({
              status: res.statusCode,
              msg: "Item removed from cart",
            });
          } else {
            throw (
              err &&
              res.json({
                status: res.statusCode,
                msg: "Something went wrong",
              })
            );
          }
        });
      }
}

export {
    Cart
}