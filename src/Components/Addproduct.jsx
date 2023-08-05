import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 export default function Addproduct(){
    const [name, setname] = useState();
    const [price, setprice] = useState();
    const [category, setcategory] = useState();
    const [company, setcompany] = useState();
    const [err, seterr] = useState(false);
    const navigate = useNavigate();
    const addproduct = async ()=>{

        const productdata = {name, price, category, company}
        if(!name || !price || !category || !company){
            seterr(true);
            return false;
        }
        // console.log(productdata);
        let userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(userId);
        let result = await fetch('https://ecommbackend-ixfo.onrender.com/addproduct',{
            method:'post',
            headers:{
                'Content-type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
            body: JSON.stringify(productdata)
        })
        result = await result.json();
        navigate('/');
        alert('Product added successfully. Plz click ok to see list')

    }
    return (

        <div className="flex flex-col justify-center items-center mt-24 space-y-3 min-w-[450px]">
              
            <h1 className="text-4xl font-medium ">Add Product</h1>

            <input className = "border-2 border-black rounded-md p-2  w-96"  type="text"  value = {name} placeholder="Enter product name" 
            onChange={(e)=>{setname(e.target.value)}}/>
            {err && !name && <span className="text-sm text-red-600">Name can't be empty</span>}

            <input className = "border-2 border-black rounded-md p-2  w-96" type="text" value = {price} placeholder="Enter price"
             onChange={(e)=>{setprice(e.target.value)}}/>
             {err && !price && <span className="text-sm text-red-600">Price can't be empty</span>}

            <input className = "border-2 border-black rounded-md p-2  w-96"  type="text" value = {category} placeholder="Enter category" 
            onChange={(e)=>{setcategory(e.target.value)}}/>
            {err && !category && <span className="text-sm text-red-600">Category can't be empty</span>}

            <input className = "border-2 border-black rounded-md p-2  w-96" type="text"  value = {company} placeholder="Enter company" 
            onChange={(e)=>{setcompany(e.target.value)}}/>
            {err && !company && <span className="text-sm text-red-600">Company can't be empty</span>}

            <button className="border-2 border-black bg-sky-400 rounded-md w-24 p-1 font-medium text-md" onClick={addproduct}>Add now</button>

        </div>
    )
 }