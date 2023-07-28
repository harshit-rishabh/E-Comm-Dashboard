import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import deleteicon from './assets/deleteicon.svg'
import updateicon from './assets/updateicon.svg'

function Productlist() {
    const [products, setproducts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getlist();
    },[])
    const getlist = async ()=>{
        let result = await fetch('https://ecommbackend-ixfo.onrender.com/getlist');
        result = await result.json();
        setproducts(result);
        console.log(result);
    }
    const deleteproduct = async (id)=>{
       let result = await fetch(`https://ecommbackend-ixfo.onrender.com/deleteproduct/${id}`,{
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
        let result = await fetch(`https://ecommbackend-ixfo.onrender.com/search/${e}`);
        result = await result.json();
        if(result){
          setproducts(result);
        }
      }else{
        getlist();
      }
    }
  return (
    <div className='flex flex-col items-center min-w-[450px] pt-20 space-y-3 w-[100%]'>
      <h1 className='text-3xl font-medium'>Product List</h1>
      <input  className = 'border-2 border-sky-300 rounded-md p-0.5 w-80 min-w-fit' type="text" placeholder='Search here' onChange={(e)=>searchbtn(e.target.value)} />
      {
      products.length>0?
      <div className='min-w-[400px]'>
      <table className='border-2 border-sky-300 rounded-md bg-white '>
        <thead>
      <tr className='text-center'>
        <td className='border-2 border-sky-300 rounded-md p-1 font-medium'>S.No</td>
        <td className='border-2 border-sky-300 rounded-md p-1 font-medium'>Name</td>
        <td className='border-2 border-sky-300 rounded-md p-1 font-medium'>Price</td>
        <td className='border-2 border-sky-300 rounded-md p-1 font-medium'>Category</td>
        <td className='border-2 border-sky-300 rounded-md p-1 font-medium'>Company</td>
        <td className='border-2 border-sky-300 rounded-md p-1 font-medium'>Operations</td>
      </tr>
      </thead>
      
      <tbody>
        {
            products.map((item, counter)=>
            <tr className='text-center'>
                <td className='border-2 border-sky-300 rounded-md p-1'>{counter+1}</td>
                <td className='border-2 border-sky-300 rounded-md p-1'>{item.name}</td>
                <td className='border-2 border-sky-300 rounded-md p-1'>{item.price}</td>
                <td className='border-2 border-sky-300 rounded-md p-1'>{item.category}</td>
                <td className='border-2 border-sky-300 rounded-md p-1'>{item.company}</td>
                <td className='border-2 border-sky-300 rounded-md p-1'>
                  <div className="space-x-1 flex flex-row">
                <img className='hover:cursor-pointer w-10' onClick={()=>deleteproduct(item._id)} src={deleteicon} alt="" />
                <img className='hover:cursor-pointer w-10' onClick={()=>updateproduct(item._id)} src={updateicon} alt="" />
                </div>
                </td>
                </tr>
                )
              }
              </tbody>
      </table>
      </div>
              :
              <h2>No Result Found</h2>
}
    </div>
  )
}

export default Productlist;
