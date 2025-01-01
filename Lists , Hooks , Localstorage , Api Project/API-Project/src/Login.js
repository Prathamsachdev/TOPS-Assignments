import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {

       let nav= useNavigate()

          const [data, setdata] = useState([]);
          const [email, setemail] = useState('');
          const [password, setpassword] = useState('');


            const login=()=>{
  
                nav('/product')
            }
  return (
    <div>
        <form>
  email: - <input type='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
  password: - <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>

    <button onClick={()=>login()}>login</button>
      </form>
    </div>
  )
}
