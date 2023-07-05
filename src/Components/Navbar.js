import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Nav(){
    const checkey = localStorage.getItem('user');
    const navigate = useNavigate();
    function logout(){
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <ul className="navbar">
                <li><Link to = "/">Our Products</Link></li>
                <li><Link to = "/add">Add Product</Link></li>
                <li><Link to = "/update">Update Product</Link></li>
                <li><Link to = "/profile">Profile</Link></li>

              
                {/* <li>{checkey?<Link to = "/signup" onClick={logout}>Logout</Link>:
                
                <Link to = "/signup">Sign Up</Link>}</li>
                <li><Link to = "/login">Login</Link></li> */}
                {
                    checkey?<li><Link to = "/signup" onClick={logout}>Logout</Link></li>:
                    <>
                    <li><Link to = "/signup">Sign Up</Link></li>
                    <li><Link to = "/login">Login</Link></li>
                    </>
                }
            </ul>
        </div>
    )
}