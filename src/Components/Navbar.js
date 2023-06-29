import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <ul className="navbar">
                <li><Link to = "/">Our Products</Link></li>
                <li><Link to = "/add">Add Product</Link></li>
                <li><Link to = "/update">Update Product</Link></li>
                <li><Link to = "/logout">Logout</Link></li>
                <li><Link to = "/profile">Profile</Link></li>
                <li><Link to = "/signup">Sign Up</Link></li>
            </ul>
        </div>
    )
}