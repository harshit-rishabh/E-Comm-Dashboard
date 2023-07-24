import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Nav() {
    const checkey = localStorage.getItem('user');
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img  className = "logo" src="https://i.pinimg.com/1200x/71/84/34/71843490677a24951318483a8c4e4681.jpg" alt="" />
            {checkey ? <ul className="navbar">
                <li><Link to="/">Our Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/signup" onClick={logout}>(Hello {JSON.parse(checkey).name})Logout</Link></li>
            </ul>
                :
                <ul className="navbar navbar-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }


        </div>
    )
}