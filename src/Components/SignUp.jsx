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
        let result = await fetch('http://localhost:5000/signup',{
            method:'post',
            headers:{
                'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result))
        if(result)navigate('/')
    }
    return (
        <div className="register">
            <h2 className="register-head">Register</h2>
            <input className = "input" type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input className = "input" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input className = "input" type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
            <button className="button" onClick={getdata} >SignUp</button>
        </div>
    )
}