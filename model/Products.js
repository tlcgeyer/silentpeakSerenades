import {connection as db} from '../config/index.js'

class Products {
    //fetching multiple products
    fetchProducts(req,res) {
        const qry = `
        SELECT prodID, prodName, prodDesc, prodAmount, category, prodUrl
        FROM Products;
        `
        db.query(qry, (err, results)=> {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchProduct(req, res) {
        const qry = `
        SELECT prodID, prodName, prodDesc, prodAmount, category, prodUrl
        FROM Products
        WHERE prodID = ${req.params.id}
        `
        db.query(qry, (err, result)=> {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }


    addProduct(req, res) {
        const qry = `
        INSERT INTO Products
        SET ?;
        `
        db.query(qry, [req.body], (err)=> {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "New item was added!"
            })
        })
    }

    updateProduct(req, res){
        const qry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg:"Item was updated successfully."
            })
        })
    }

    deleteProduct(req, res){
        const qry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Item was deleted successfully."
            })
        })
    }
}
export {
    Products
}