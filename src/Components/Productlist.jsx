import React, { useEffect, useState } from 'react'

function Productlist() {
    const [products, setproducts] = useState([]);
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
    //    result = await result.json();
    //    if(result){
       getlist();
    //    }
    }
  return (
    <div className='productlist'>
      <h1>Product List</h1>
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
            products.map((item, counter)=>
            <tr>
                <td>{counter+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td><button onClick={()=>deleteproduct(item._id)}>Delete</button></td>
                </tr>
                )
            }
            </tbody>
      </table>

    </div>
  )
}

export default Productlist;
