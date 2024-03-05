import {config} from "dotenv";
config()

// To create a token we have to first : PS: sign is used to create a token
import jwt from "jsonwebtoken";

const {sign, verify} = jwt;

// Creating a token.
function createToken(user) {
    return sign({ //to create a token make use of the function sign and to verify the token make use of the token function 'verify'
        emailAdd: user.emailAdd,
        userPwd: userPwd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )
}


// Verifying the token.
function verifyAToken(req, res, next) { 
    // Retrieve a token from the browser
    const token = req?.headers['Authorization'] 
    if(token) {
        if(verify(token, process.env.
            SECRET_KEY)) {
                next()
            }else {
                res?.json({
                    status: res.statusCode,
                    msg: "Please provide the correct credentials."
                })
            }
    }else {// if the user does not have a token
        res?.json({
            status: res.statusCode,
            msg: "Please login"
        })
}
}
export {
    createToken,
    verifyAToken
}