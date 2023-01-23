//import axios from 'axios';
import axios from 'axios';
import React from 'react';
import {useState} from 'react'
import { Navigate } from 'react-router-dom';

function Login() {

  const[studentDetails, setDetails] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data: res} = await axios.post('http://localhost:5000/login', studentDetails);
      console.log(res.data)
      localStorage.setItem("token", res.data);
      if (res.data){
        // alert("Login Success")
        window.location.href = "/dashboard"
      }
      //window.location="/"
    }
    catch{

    }
  }

  return (
    <div>
      <h1 align="center"> Login </h1>
      <form align="center"> 
        <input type="email" placeholder="email" value={studentDetails.email} onChange={(event) => {setDetails({...studentDetails, email: event.target.value})}} required/> 
        <br/>
        <input type="password" placeholder="secret words" value={studentDetails.password} onChange={(event) => {setDetails({...studentDetails, password: event.target.value})}} required/>
        <br/>
        <input type="submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default Login;