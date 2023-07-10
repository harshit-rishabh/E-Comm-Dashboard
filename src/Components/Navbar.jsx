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
            <img  className = "logo" src="https://banner2.cleanpng.com/20180811/hts/kisspng-e-commerce-web-design-website-development-internet-ebook-vendors-mspbasics-com-5b6e96a9c05a40.5743099315339741857879.jpg" alt="" />
            {checkey ? <ul className="navbar">
                <li><Link to="/">Our Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup" onClick={logout}>Logout({JSON.parse(checkey).name})</Link></li>
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