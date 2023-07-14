import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Productlist() {
    const [products, setproducts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getlist();
    },[])
    const getlist = async ()=>{
        let result = await fetch('http://localhost:5000/getlist');
        result = await result.json();
        setproducts(result);
        console.log(result);
    }
    const deleteproduct = async (id)=>{
       let result = await fetch(`http://localhost:5000/deleteproduct/${id}`,{
        method:'delete'
       })
       getlist();
    }
    const updateproduct = (id)=>{
        navigate(`/update/${id}`)
        console.log(id);
    }
    const searchbtn = async (e)=>{
      if(e){
        let result = await fetch(`http://localhost:5000/search/${e}`);
        result = await result.json();
        if(result){
          setproducts(result);
        }
      }else{
        getlist();
      }
    }
  return (
    <div className='productlist'>
      <h1>Product List</h1>
      <input  className = 'search-btn' type="text" placeholder='Search here' onChange={(e)=>searchbtn(e.target.value)} />
      <table>
        <tbody>
      <tr>
        <td>S.No</td>
        <td>Name</td>
        <td>Price</td>
        <td>Category</td>
        <td>Company</td>
        <td>Operations</td>
      </tr>
      
        {
            products.length>0 ? products.map((item, counter)=>
            <tr>
                <td>{counter+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td><button onClick={()=>deleteproduct(item._id)}>Delete</button>
                <button onClick={()=>updateproduct(item._id)}>Update</button></td>
                </tr>
                )
                :
                <h2>No Result Found</h2>
            }
            </tbody>
      </table>

    </div>
  )
}

export default Productlist;
