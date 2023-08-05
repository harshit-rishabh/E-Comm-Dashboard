import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState();
    const [pass, setpass] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        const checkey = localStorage.getItem('user');
        if(checkey){
            navigate('/')
        }
    },[])
    async function logindata(){
        console.log({email, pass})
        let result = await fetch('https://ecommbackend-ixfo.onrender.com/login',{
            method:'post',
            body:JSON.stringify({email, pass})
        })
        result = await result.json();
        if(result.name){
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/')
        }else{
            alert('plz enter correct details...')
        }
    }
    return (
        <div className="flex flex-col justify-center items-center mt-28 space-y-3 min-w-[450px]">
            <h1 className="text-4xl font-medium">Login</h1>
            <input className="border-2 border-black rounded-md p-2  w-96" type="text" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
            <input className="border-2 border-black rounded-md p-2  w-96" type="password" placeholder="Password" onChange={(e)=>setpass(e.target.value)} />
            <button className="border-2 border-black bg-sky-400 rounded-md w-24 p-1 font-medium text-md" onClick={logindata}>Login</button>
        </div>
    )
}