import { Users } from "./Users.js";
import { Products } from "./Products.js";
import {Cart} from "./Cart.js";
import {getUserByEmail} from "./User.js";

let users = new Users()
let products = new Products()
let cart = new Cart()
getUserByEmail

export{
    users,
    products,
    cart
}