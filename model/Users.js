import { connection as db} from "../config/index.js";
import { hash,compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";

class Users{
    fetchUsers(req, res) {
        const qry =`
        SELECT userID, firstName, lastName, emailAdd, gender, userAge, userRole, userProfile
        FROM Users;
        `
        db.query(qry,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const qry =`
        SELECT userID, firstName, lastName, emailAdd, gender, userAge, userRole, userProfile
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    fetchUserProfile(req, res) {
        const qry = `
        SELECT *
        FROM users WHERE
        emailAdd = ${req.params.emailAdd}
        `
        db.query(qry, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }

    //checking if email matches password provided
    fetchUserPwd(req, res) {
        const qry = `
        SELECT
        userPwd FROM users
        WHERE emailAdd = ${req.params.emailAdd}
        `
        db.query(qry, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }

    async addUser(req, res){
        let data = req.body
        data.userPwd = await hash(data?.userPwd, 10)
        let user = {
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `
        db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: "This Account already exists."
                })
            }else {
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: "Your Account has been registered."
                })
            }
        })
    }
    async updateUser(req, res){
        const data = req.body
        if(data?.userPwd){
            data.userPwd = await hash(data?.userPwd, 8)
        }
        const qry = `
        UPDATE Users
        SET ? 
        WHERE userID = ${req.params.id}
        `
        db.query(qry, [data], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "You have successfully updated your Account."
            })
        })
    }
    async deleteUser(req, res){
        const qry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your Account has been deleted."
            })
        })
    }
    async login(req, res){
        const {emailAdd, userPwd} = req.body
        const qry = `
        SELECT userID, firstName, lastName, emailAdd, gender, userAge, userRole, userProfile, userPwd
        FROM Users 
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(qry, async(err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg:"Incorrect email address."
                })
            }else{
                const validPass = await compare
                (userPwd, result[0].userPwd)
                if(validPass){
                    const token = createToken({
                        emailAdd,
                        userPwd
                    })
                    res.json({
                        status: res.statusCode,
                        msg:"You have logged in successfully.",
                        token,
                        result: result[0]
                    })
                }else{
                    res.json({
                        status: res.statusCode,
                        msg:"Your password is incorrect."
                    })
                }
            }
        })
    }
}
export{
    Users
}