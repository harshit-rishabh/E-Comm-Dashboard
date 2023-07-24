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
                'Content-type':'application/json'
            },
            body: JSON.stringify(productdata)
        })
        result = await result.json();
        navigate('/');
        alert('Product added successfully. Plz click ok to see list')

    }
    return (

        <div className="register">
              
            <h1>Add Product</h1>

            <input type="text" className="input" value = {name} placeholder="Enter product name" 
            onChange={(e)=>{setname(e.target.value)}}/>
            {err && !name && <span className="invalid-input">Name can't be empty</span>}

            <input type="text" className="input" value = {price} placeholder="Enter price"
             onChange={(e)=>{setprice(e.target.value)}}/>
             {err && !price && <span className="invalid-input">Price can't be empty</span>}

            <input type="text" className="input" value = {category} placeholder="Enter category" 
            onChange={(e)=>{setcategory(e.target.value)}}/>
            {err && !category && <span className="invalid-input">Category can't be empty</span>}

            <input type="text" className="input" value = {company} placeholder="Enter company" 
            onChange={(e)=>{setcompany(e.target.value)}}/>
            {err && !company && <span className="invalid-input">Company can't be empty</span>}

            <button className="button" onClick={addproduct}>Add now</button>

        </div>
    )
 }