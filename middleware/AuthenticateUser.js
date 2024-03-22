import { config } from "dotenv";
import { hash, compare } from "bcrypt";
import cookieParser from "cookie-parser";
import { Users } from "../model/Users.js";
config()

// To create a token we have to first : PS: sign is used to create a token
import jwt from "jsonwebtoken";

const {sign, verify} = jwt;

// Creating a token.
function createToken(user) {
    return sign({ //to create a token make use of the function sign and to verify the token make use of the token function 'verify'
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
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

// const auth = async (req, res, next) => {
//     const { userPwd, emailAdd } = req.body;
//     try {
//         const hashedPassword = await userPwd(emailAdd);
//         const validPassword = await compare(userPwd, hashedPassword);

//          if (validPassword) {
//             const currentUser = await userProfile(emailAdd);
//             const token = createToken(currentUser);
//             res.cookie('token', token, { httpOnly: false, expiresIn: '1h' });
//             res.json({
//                 token: token,
//                 msg: 'Yosh! I am logged in~',
//                 user: currentUser
//             });
//             next();
//         } else {
//             res.status(401).json({ error: 'Incorrect email or password' });
//         }
//     }catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }

    
// };

// const authenticate = (req, res, next) => {
//   const token = req.cookies.token;
//     if (!token) {
//         res.status(401).json({ error: "Token not provided" });
//         return;
//     }
//     try {
//         const decoded = verify(token, process.env.SECRET_KEY);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(401).json({ error: "Invalid token" });
//     }
// };


export {
    createToken,
    verifyAToken,
    // auth,
    // authenticate

}