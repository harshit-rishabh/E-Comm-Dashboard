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
    })
    async function logindata(){
        console.log({email, pass})
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
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
        <div className="login">
            <input className="input" type="text" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
            <input className="input" type="password" placeholder="Password" onChange={(e)=>setpass(e.target.value)} />
            <button className="signup" onClick={logindata}>Login</button>
        </div>
    )
}