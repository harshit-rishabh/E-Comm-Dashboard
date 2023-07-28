import React from "react";
import { Link, useNavigate } from "react-router-dom";
import carticon from './assets/cart.jpg'

export default function Nav() {
    const checkey = localStorage.getItem('user');
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div className="bg-sky-300 relative min-w-fit min-h-fit">
            <img className="absolute w-12 rounded-2xl top-1 left-1" src={carticon} alt="" />
            {checkey ? <ul className="flex flex-row ml-14 items-center">
                <li className="m-2.5 p-1 hover:bg-purple-200  hover:rounded-lg hover:border-[1px] hover:border-black items-center justify-center  "><Link to="/">Our Products</Link></li>
                <li className="m-3 p-1 hover:bg-purple-200  hover:rounded-lg hover:border-[1px] hover:border-black items-center justify-center"><Link to="/add">Add Product</Link></li>
                <li className="m-3 p-1 hover:bg-purple-200  hover:rounded-lg hover:border-[1px] hover:border-black items-center justify-center"><Link to="/update">Update Product</Link></li>
                <li className="m-3 p-1 hover:bg-purple-200  hover:rounded-lg hover:border-[1px] hover:border-black items-center justify-center"><Link to="/signup" onClick={logout}>(Hello {JSON.parse(checkey).name})Logout</Link></li>
            </ul>
                :
                <ul className="flex flex-row  bg-sky-300   justify-end">
                    <li className="m-3 p-1 hover:bg-purple-200  hover:rounded-lg hover:border-[1px] hover:border-black items-center justify-center"><Link to="/signup">Sign Up</Link></li>
                    <li className="m-3 p-1 hover:bg-purple-200 hover:rounded-lg hover:border-[1px] hover:border-black items-center justify-center"><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}