import React, {useState} from "react"
export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    function getdata(){
        const data = {name, email, pass}
        console.log(data)
    }
    return (
        <div className="register">
            <h2 >Register</h2>
            <input className = "input" type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input className = "input" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input className = "input" type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
            <button className="signup" onClick={getdata} >SignUp</button>
        </div>
    )
}