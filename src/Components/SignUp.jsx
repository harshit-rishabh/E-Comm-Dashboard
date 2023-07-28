import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const checkey = localStorage.getItem('user');
        if(checkey){
            navigate('/')
        }
    })
    async function getdata(){
        let data = {name, email, pass}
        let result = await fetch('https://ecommbackend-ixfo.onrender.com/signup',{
            method:'post',
            headers:{
                'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        result = await result.json();
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result))
        if(result)navigate('/')
    }
    return (
        <div className="flex flex-col justify-center items-center mt-28 space-y-3 min-w-fit">
            <h2 className="text-4xl font-medium ">Register</h2>
            <input className = "border-2 border-black rounded-md p-2  w-96" type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input className = "border-2 border-black rounded-md p-2 min-w-fit w-96" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input className = "border-2 border-black rounded-md p-2 min-w-fit w-96" type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
            <button className="border-2 border-black bg-sky-400 rounded-md w-24 p-1 font-medium text-md" onClick={getdata} >SignUp</button>
        </div>
    )
}