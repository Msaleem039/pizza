import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    // const register =()=>{
    //     localStorage.setItem('login',true)
    //     navigate('/')
    // }
    // useEffect(()=>{
    //     const login = localStorage.getItem('login');
    // if(login){
    //   navigate('/');
    // }
    // })
  return (
    <div>
    Name:
    <input type='text'/>
    <br></br>
    <br></br>
    Email:
    <input type='email'/>
    <br></br>
    <br></br>
    Password:
    <input type='password'/>
    <br></br><br></br>

    </div>
  )
}

export default Register